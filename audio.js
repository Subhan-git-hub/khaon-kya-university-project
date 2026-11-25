class SoundController {
    constructor() {
        this.audio_context = null;
        this.is_sound_muted = false;
        this.is_speech_voice_enabled = true;
        this.is_audio_initialized = false;
    }

    initialize_audio_context() {
        if (this.is_audio_initialized) {
            return;
        }
        try {
            const browser_audio_constructor = window.AudioContext || window.webkitAudioContext;
            if (browser_audio_constructor) {
                this.audio_context = new browser_audio_constructor();
            }
            this.is_audio_initialized = true;
        } catch (initialization_error) {
            this.is_audio_initialized = false;
        }
    }

    resume_audio_context() {
        if (this.audio_context && this.audio_context.state === "suspended") {
            this.audio_context.resume();
        }
    }

    toggle_sound_mute() {
        this.is_sound_muted = !this.is_sound_muted;
        return this.is_sound_muted;
    }

    play_tick_sound(pitch_multiplier = 1) {
        if (this.is_sound_muted) {
            return;
        }
        this.initialize_audio_context();
        this.resume_audio_context();
        if (!this.audio_context) {
            return;
        }

        const oscillator_node = this.audio_context.createOscillator();
        const gain_node = this.audio_context.createGain();
        const starting_frequency = 850 * pitch_multiplier;
        const current_audio_time = this.audio_context.currentTime;

        oscillator_node.type = "triangle";
        oscillator_node.frequency.setValueAtTime(starting_frequency, current_audio_time);
        oscillator_node.frequency.exponentialRampToValueAtTime(120, current_audio_time + 0.04);

        gain_node.gain.setValueAtTime(0.25, current_audio_time);
        gain_node.gain.exponentialRampToValueAtTime(0.001, current_audio_time + 0.04);

        oscillator_node.connect(gain_node);
        gain_node.connect(this.audio_context.destination);

        oscillator_node.start();
        oscillator_node.stop(current_audio_time + 0.05);
    }

    play_spin_start_sound() {
        if (this.is_sound_muted) {
            return;
        }
        this.initialize_audio_context();
        this.resume_audio_context();
        if (!this.audio_context) {
            return;
        }

        const oscillator_node = this.audio_context.createOscillator();
        const gain_node = this.audio_context.createGain();
        const current_audio_time = this.audio_context.currentTime;

        oscillator_node.type = "sine";
        oscillator_node.frequency.setValueAtTime(150, current_audio_time);
        oscillator_node.frequency.exponentialRampToValueAtTime(500, current_audio_time + 0.3);

        gain_node.gain.setValueAtTime(0.01, current_audio_time);
        gain_node.gain.linearRampToValueAtTime(0.3, current_audio_time + 0.15);
        gain_node.gain.exponentialRampToValueAtTime(0.001, current_audio_time + 0.35);

        oscillator_node.connect(gain_node);
        gain_node.connect(this.audio_context.destination);

        oscillator_node.start();
        oscillator_node.stop(current_audio_time + 0.36);
    }

    play_winner_buzzer_chord() {
        if (this.is_sound_muted) {
            return;
        }
        this.initialize_audio_context();
        this.resume_audio_context();
        if (!this.audio_context) {
            return;
        }

        const chord_notes_array = [
            { note_frequency: 523.25, offset_time: 0.0, note_duration: 0.15 },
            { note_frequency: 659.25, offset_time: 0.12, note_duration: 0.15 },
            { note_frequency: 783.99, offset_time: 0.24, note_duration: 0.18 },
            { note_frequency: 1046.50, offset_time: 0.38, note_duration: 0.55 },
            { note_frequency: 1318.51, offset_time: 0.42, note_duration: 0.50 }
        ];

        chord_notes_array.forEach((individual_note) => {
            const oscillator_node = this.audio_context.createOscillator();
            const gain_node = this.audio_context.createGain();
            const start_timestamp = this.audio_context.currentTime + individual_note.offset_time;

            oscillator_node.type = "triangle";
            oscillator_node.frequency.setValueAtTime(individual_note.note_frequency, start_timestamp);

            gain_node.gain.setValueAtTime(0.001, start_timestamp);
            gain_node.gain.linearRampToValueAtTime(0.28, start_timestamp + 0.03);
            gain_node.gain.exponentialRampToValueAtTime(0.001, start_timestamp + individual_note.note_duration);

            oscillator_node.connect(gain_node);
            gain_node.connect(this.audio_context.destination);

            oscillator_node.start(start_timestamp);
            oscillator_node.stop(start_timestamp + individual_note.note_duration + 0.05);
        });
    }

    speak_winning_food_message(selected_food_name) {
        if (this.is_sound_muted || !this.is_speech_voice_enabled) {
            return;
        }
        if (!("speechSynthesis" in window)) {
            return;
        }

        try {
            window.speechSynthesis.cancel();

            const announcement_text = "Congrats! " + selected_food_name + " has been selected for you!";
            const speech_utterance = new SpeechSynthesisUtterance(announcement_text);
            speech_utterance.rate = 1.05;
            speech_utterance.pitch = 1.15;
            speech_utterance.volume = 0.95;

            const available_voices_list = window.speechSynthesis.getVoices();
            if (available_voices_list.length > 0) {
                const english_voice_option = available_voices_list.find((voice_item) => {
                    return voice_item.lang.startsWith("en");
                });
                if (english_voice_option) {
                    speech_utterance.voice = english_voice_option;
                }
            }

            setTimeout(() => {
                window.speechSynthesis.speak(speech_utterance);
            }, 300);
        } catch (speech_error) {
            return;
        }
    }
}

window.sound_controller_instance = new SoundController();
