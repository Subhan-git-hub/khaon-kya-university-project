$(document).ready(function() {
    let active_food_items_list = [...food_items_data];
    let current_wheel_rotation_angle = 0;
    let is_wheel_currently_spinning = false;
    let selected_food_item_record = null;
    let filter_selected_category = "all";
    let filter_selected_max_distance = 5.0;
    let filter_selected_budget = "all";
    let popup_filter_distance_radius = 5.0;
    let popup_selected_sort_order = "distance";
    let directory_selected_radius = "all";
    let directory_search_keyword = "";
    let last_ticked_peg_index = -1;

    const food_wheel_canvas_element = document.getElementById("food_wheel_canvas");
    const wheel_canvas_rendering_context = food_wheel_canvas_element.getContext("2d");
    const wheel_pointer_indicator_element = document.getElementById("wheel_pointer_indicator");

    const primary_spin_trigger_button = $("#primary_spin_trigger_button");
    const center_spin_hub_button = $("#center_spin_hub_button");
    const food_result_popup_modal = $("#food_result_popup_modal");

    function initialize_canvas_display_resolution() {
        const device_pixel_ratio_value = window.devicePixelRatio || 1;
        const canvas_bounding_rectangle = food_wheel_canvas_element.getBoundingClientRect();
        const display_pixel_width = canvas_bounding_rectangle.width || 540;
        const display_pixel_height = canvas_bounding_rectangle.height || 540;

        food_wheel_canvas_element.width = display_pixel_width * device_pixel_ratio_value;
        food_wheel_canvas_element.height = display_pixel_height * device_pixel_ratio_value;
        wheel_canvas_rendering_context.scale(device_pixel_ratio_value, device_pixel_ratio_value);
    }

    function draw_food_wheel_on_canvas() {
        const device_pixel_ratio_value = window.devicePixelRatio || 1;
        const canvas_actual_width = food_wheel_canvas_element.width / device_pixel_ratio_value;
        const canvas_actual_height = food_wheel_canvas_element.height / device_pixel_ratio_value;
        const wheel_center_x_coordinate = canvas_actual_width / 2;
        const wheel_center_y_coordinate = canvas_actual_height / 2;
        const outer_wheel_radius_length = Math.min(wheel_center_x_coordinate, wheel_center_y_coordinate) - 14;
        const total_number_of_active_items = active_food_items_list.length;

        wheel_canvas_rendering_context.clearRect(0, 0, canvas_actual_width, canvas_actual_height);

        if (total_number_of_active_items === 0) {
            wheel_canvas_rendering_context.fillStyle = "#64748B";
            wheel_canvas_rendering_context.font = "bold 16px Plus Jakarta Sans";
            wheel_canvas_rendering_context.textAlign = "center";
            wheel_canvas_rendering_context.fillText("No items selected", wheel_center_x_coordinate, wheel_center_y_coordinate);
            return;
        }

        const single_slice_arc_angle = (2 * Math.PI) / total_number_of_active_items;

        wheel_canvas_rendering_context.save();
        wheel_canvas_rendering_context.translate(wheel_center_x_coordinate, wheel_center_y_coordinate);
        wheel_canvas_rendering_context.rotate(current_wheel_rotation_angle);

        wheel_canvas_rendering_context.beginPath();
        wheel_canvas_rendering_context.arc(0, 0, outer_wheel_radius_length + 6, 0, 2 * Math.PI);
        wheel_canvas_rendering_context.fillStyle = "#1E293B";
        wheel_canvas_rendering_context.fill();

        for (let item_index = 0; item_index < total_number_of_active_items; item_index++) {
            const current_item_object = active_food_items_list[item_index];
            const slice_start_angle = item_index * single_slice_arc_angle;
            const slice_end_angle = slice_start_angle + single_slice_arc_angle;

            wheel_canvas_rendering_context.beginPath();
            wheel_canvas_rendering_context.moveTo(0, 0);
            wheel_canvas_rendering_context.arc(0, 0, outer_wheel_radius_length, slice_start_angle, slice_end_angle);
            wheel_canvas_rendering_context.closePath();

            wheel_canvas_rendering_context.fillStyle = current_item_object.slice_background_color;
            wheel_canvas_rendering_context.fill();

            wheel_canvas_rendering_context.lineWidth = 2;
            wheel_canvas_rendering_context.strokeStyle = "rgba(255, 255, 255, 0.4)";
            wheel_canvas_rendering_context.stroke();

            wheel_canvas_rendering_context.save();
            wheel_canvas_rendering_context.rotate(slice_start_angle + single_slice_arc_angle / 2);

            wheel_canvas_rendering_context.font = "24px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
            wheel_canvas_rendering_context.textAlign = "center";
            wheel_canvas_rendering_context.textBaseline = "middle";
            wheel_canvas_rendering_context.fillText(current_item_object.food_icon, outer_wheel_radius_length * 0.78, 0);

            wheel_canvas_rendering_context.fillStyle = current_item_object.slice_text_color || "#FFFFFF";
            wheel_canvas_rendering_context.font = "bold 13px Plus Jakarta Sans";
            wheel_canvas_rendering_context.textAlign = "right";
            wheel_canvas_rendering_context.textBaseline = "middle";
            wheel_canvas_rendering_context.shadowColor = "rgba(0, 0, 0, 0.45)";
            wheel_canvas_rendering_context.shadowBlur = 3;
            wheel_canvas_rendering_context.fillText(current_item_object.food_name, outer_wheel_radius_length * 0.62, 0);
            wheel_canvas_rendering_context.shadowBlur = 0;

            wheel_canvas_rendering_context.restore();
        }

        for (let peg_index = 0; peg_index < total_number_of_active_items; peg_index++) {
            const current_peg_angle = peg_index * single_slice_arc_angle;
            const peg_position_x = Math.cos(current_peg_angle) * (outer_wheel_radius_length + 3);
            const peg_position_y = Math.sin(current_peg_angle) * (outer_wheel_radius_length + 3);

            wheel_canvas_rendering_context.beginPath();
            wheel_canvas_rendering_context.arc(peg_position_x, peg_position_y, 4, 0, 2 * Math.PI);
            wheel_canvas_rendering_context.fillStyle = "#FFFFFF";
            wheel_canvas_rendering_context.fill();
        }

        wheel_canvas_rendering_context.restore();
    }

    function start_wheel_spin_animation() {
        if (is_wheel_currently_spinning) {
            return;
        }
        if (active_food_items_list.length === 0) {
            alert("No food items available to spin.");
            return;
        }

        window.sound_controller_instance.initialize_audio_context();
        window.sound_controller_instance.play_spin_start_sound();

        is_wheel_currently_spinning = true;
        primary_spin_trigger_button.prop("disabled", true);
        $("#wheel_status_message_box").html('<i class="fa-solid fa-spinner fa-spin"></i> <span>Selecting a food item...</span>');

        const minimum_full_rotations = 6;
        const additional_random_rotations = Math.random() * 4;
        const total_radians_to_spin = (minimum_full_rotations + additional_random_rotations) * 2 * Math.PI + Math.random() * 2 * Math.PI;

        const total_animation_duration_milliseconds = 4800;
        const spin_start_timestamp = performance.now();
        const initial_wheel_rotation_angle = current_wheel_rotation_angle;

        function cubic_ease_out_timing_function(time_fraction) {
            return 1 - Math.pow(1 - time_fraction, 3);
        }

        function execute_spin_frame(current_frame_timestamp) {
            const time_elapsed_since_spin_start = current_frame_timestamp - spin_start_timestamp;
            const normalized_progress_value = Math.min(time_elapsed_since_spin_start / total_animation_duration_milliseconds, 1);
            const eased_progress_value = cubic_ease_out_timing_function(normalized_progress_value);

            current_wheel_rotation_angle = initial_wheel_rotation_angle + total_radians_to_spin * eased_progress_value;

            handle_peg_ticking_sound();
            draw_food_wheel_on_canvas();

            if (normalized_progress_value < 1) {
                requestAnimationFrame(execute_spin_frame);
            } else {
                is_wheel_currently_spinning = false;
                primary_spin_trigger_button.prop("disabled", false);
                process_winning_food_selection();
            }
        }

        requestAnimationFrame(execute_spin_frame);
    }

    function handle_peg_ticking_sound() {
        const total_number_of_items = active_food_items_list.length;
        if (total_number_of_items === 0) {
            return;
        }

        const single_arc_size = (2 * Math.PI) / total_number_of_items;
        const top_pointer_angle_position = (3 * Math.PI) / 2;
        let normalized_rotation_offset = (top_pointer_angle_position - current_wheel_rotation_angle) % (2 * Math.PI);
        if (normalized_rotation_offset < 0) {
            normalized_rotation_offset += 2 * Math.PI;
        }

        const currently_pointed_peg_index = Math.floor(normalized_rotation_offset / single_arc_size);

        if (currently_pointed_peg_index !== last_ticked_peg_index) {
            last_ticked_peg_index = currently_pointed_peg_index;
            window.sound_controller_instance.play_tick_sound(1.0);

            wheel_pointer_indicator_element.classList.remove("tick_wiggle");
            void wheel_pointer_indicator_element.offsetWidth;
            wheel_pointer_indicator_element.classList.add("tick_wiggle");
        }
    }

    function process_winning_food_selection() {
        const total_number_of_items = active_food_items_list.length;
        const single_arc_size = (2 * Math.PI) / total_number_of_items;
        const top_pointer_angle_position = (3 * Math.PI) / 2;

        let normalized_rotation_offset = (top_pointer_angle_position - current_wheel_rotation_angle) % (2 * Math.PI);
        if (normalized_rotation_offset < 0) {
            normalized_rotation_offset += 2 * Math.PI;
        }

        const winning_food_item_index = Math.floor(normalized_rotation_offset / single_arc_size);
        const winning_food_item = active_food_items_list[winning_food_item_index];
        selected_food_item_record = winning_food_item;

        window.sound_controller_instance.play_winner_buzzer_chord();
        window.sound_controller_instance.speak_winning_food_message(winning_food_item.food_name);

        if (typeof confetti === "function") {
            confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        $("#wheel_status_message_box").html(`
            <i class="fa-solid fa-check" style="color: #15803D;"></i>
            <span>Selected: <strong>${winning_food_item.food_name} (${winning_food_item.food_urdu_name})</strong></span>
        `);

        setTimeout(() => {
            open_food_result_popup(winning_food_item);
        }, 500);
    }

    function select_instant_random_food() {
        if (is_wheel_currently_spinning || active_food_items_list.length === 0) {
            return;
        }
        const random_choice_index = Math.floor(Math.random() * active_food_items_list.length);
        const chosen_winning_food = active_food_items_list[random_choice_index];
        selected_food_item_record = chosen_winning_food;

        window.sound_controller_instance.play_winner_buzzer_chord();
        window.sound_controller_instance.speak_winning_food_message(chosen_winning_food.food_name);

        if (typeof confetti === "function") {
            confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
        }

        open_food_result_popup(chosen_winning_food);
    }

    function open_food_result_popup(food_record) {
        $("#winner_food_emoji_display").text(food_record.food_icon);
        $("#winner_food_name_display").text(food_record.food_name);
        $("#winner_food_urdu_display").text(food_record.food_urdu_name);

        const food_quotes_list = food_quotes_dictionary[food_record.food_id] || [food_record.food_tagline];
        const random_selected_quote = food_quotes_list[Math.floor(Math.random() * food_quotes_list.length)];
        $("#winner_food_quote_display").text(`"${random_selected_quote}"`);

        popup_filter_distance_radius = 5.0;
        $("#popup_radius_pill_group .mini_radius_pill").removeClass("active");
        $('#popup_radius_pill_group .mini_radius_pill[data-radius="5"]').addClass("active");

        render_popup_matching_restaurants(food_record);
        food_result_popup_modal.addClass("active_popup");
    }

    function render_popup_matching_restaurants(food_record) {
        const popup_restaurants_list_container = $("#popup_restaurants_scroll_list");
        popup_restaurants_list_container.empty();

        let filtered_restaurants_array = restaurants_database.filter((restaurant_entry) => {
            const serves_current_food = restaurant_entry.food_items_served.includes(food_record.food_id);
            const falls_within_radius = restaurant_entry.distance_in_kilometers <= popup_filter_distance_radius;
            const matches_chosen_budget = filter_selected_budget === "all" || restaurant_entry.budget_category === filter_selected_budget;
            return serves_current_food && falls_within_radius && matches_chosen_budget;
        });

        if (popup_selected_sort_order === "distance") {
            filtered_restaurants_array.sort((first_item, second_item) => {
                return first_item.distance_in_kilometers - second_item.distance_in_kilometers;
            });
        } else if (popup_selected_sort_order === "rating") {
            filtered_restaurants_array.sort((first_item, second_item) => {
                return second_item.rating_score - first_item.rating_score;
            });
        } else if (popup_selected_sort_order === "price") {
            const budget_numerical_rank = { budget: 1, mid: 2, premium: 3 };
            filtered_restaurants_array.sort((first_item, second_item) => {
                return budget_numerical_rank[first_item.budget_category] - budget_numerical_rank[second_item.budget_category];
            });
        }

        $("#popup_matching_spots_counter").text("Found " + filtered_restaurants_array.length + " matching spots");

        if (filtered_restaurants_array.length === 0) {
            popup_restaurants_list_container.html(`
                <div class="popup_empty_notice">
                    <p>No spots found within ${popup_filter_distance_radius} km with the current budget.</p>
                </div>
            `);
            return;
        }

        filtered_restaurants_array.forEach((restaurant_record) => {
            const is_located_on_campus = restaurant_record.distance_in_kilometers <= 0.2;
            const google_maps_navigation_url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(restaurant_record.maps_search_query);

            const rendered_card_element = $(`
                <div class="popup_restaurant_card ${is_located_on_campus ? 'campus_card' : ''}">
                    <div class="popup_card_top_row">
                        <div>
                            <div class="popup_card_name_title">${restaurant_record.restaurant_name}</div>
                            <div class="popup_card_address">${restaurant_record.location_address}</div>
                        </div>
                        <span class="distance_tag_badge ${is_located_on_campus ? 'campus_badge' : ''}">
                            ${is_located_on_campus ? 'On Campus' : restaurant_record.distance_in_kilometers + ' km'}
                        </span>
                    </div>

                    <div class="popup_card_meta_row">
                        <span><i class="fa-solid fa-star" style="color: #D97706;"></i> ${restaurant_record.rating_score} (${restaurant_record.total_reviews})</span>
                        <span><i class="fa-solid fa-wallet"></i> ${restaurant_record.price_range_text}</span>
                        <span><i class="fa-solid fa-clock"></i> ${restaurant_record.opening_hours}</span>
                    </div>

                    ${restaurant_record.student_advice ? `
                        <div class="student_advice_callout">
                            <strong>Tip:</strong> ${restaurant_record.student_advice}
                        </div>
                    ` : ''}

                    <div class="popup_card_footer">
                        <span>~${restaurant_record.walking_time_minutes} min walk</span>
                        <a href="${google_maps_navigation_url}" target="_blank" rel="noopener noreferrer" class="google_maps_action_link">
                            <i class="fa-solid fa-diamond-turn-right"></i> Directions on Maps
                        </a>
                    </div>
                </div>
            `);

            popup_restaurants_list_container.append(rendered_card_element);
        });
    }

    function render_all_directory_spots() {
        const directory_grid_container = $("#restaurants_cards_container");
        directory_grid_container.empty();

        const search_keyword_string = directory_search_keyword.toLowerCase().trim();
        const maximum_allowed_radius = directory_selected_radius === "all" ? 5.0 : parseFloat(directory_selected_radius);

        const filtered_directory_records = restaurants_database.filter((restaurant_entry) => {
            const matches_distance_radius = restaurant_entry.distance_in_kilometers <= maximum_allowed_radius;
            const matches_search_query = search_keyword_string === "" ||
                restaurant_entry.restaurant_name.toLowerCase().includes(search_keyword_string) ||
                restaurant_entry.location_address.toLowerCase().includes(search_keyword_string) ||
                restaurant_entry.food_items_served.some((food_identifier) => {
                    const matched_food = food_items_data.find((f) => f.food_id === food_identifier);
                    return matched_food && matched_food.food_name.toLowerCase().includes(search_keyword_string);
                });

            return matches_distance_radius && matches_search_query;
        });

        if (filtered_directory_records.length === 0) {
            directory_grid_container.html(`
                <div style="grid-column: 1 / -1; text-align: center; padding: 30px; color: #64748B;">
                    <p>No food spots found matching your search.</p>
                </div>
            `);
            return;
        }

        filtered_directory_records.sort((item_one, item_two) => {
            return item_one.distance_in_kilometers - item_two.distance_in_kilometers;
        });

        filtered_directory_records.forEach((restaurant_entry) => {
            const is_on_campus_spot = restaurant_entry.distance_in_kilometers <= 0.2;
            const google_maps_navigation_url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(restaurant_entry.maps_search_query);

            const food_tags_html_markup = restaurant_entry.food_items_served.map((food_identifier) => {
                const found_food_object = food_items_data.find((f) => f.food_id === food_identifier);
                if (!found_food_object) return "";
                const is_currently_winning_food = selected_food_item_record && selected_food_item_record.food_id === food_identifier;
                return `<span class="item_tag_span ${is_currently_winning_food ? 'highlight_matched_food' : ''}">${found_food_object.food_icon} ${found_food_object.food_name}</span>`;
            }).join("");

            const single_restaurant_card = $(`
                <div class="restaurant_entry_card ${is_on_campus_spot ? 'on_campus_spot' : ''}">
                    <div>
                        <div class="card_header_row">
                            <div>
                                <h4 class="card_restaurant_title">${restaurant_entry.restaurant_name}</h4>
                                <div class="card_place_category">${restaurant_entry.place_type}</div>
                            </div>
                            <span class="distance_tag_badge ${is_on_campus_spot ? 'campus_badge' : ''}">
                                ${is_on_campus_spot ? 'Inside Campus' : restaurant_entry.distance_in_kilometers + ' km'}
                            </span>
                        </div>

                        <div class="card_info_list">
                            <div class="card_info_row">
                                <i class="fa-solid fa-location-dot"></i>
                                <span>${restaurant_entry.location_address}</span>
                            </div>
                            <div class="card_info_row">
                                <i class="fa-solid fa-clock"></i>
                                <span>${restaurant_entry.opening_hours}</span>
                            </div>
                            <div class="card_info_row">
                                <span class="rating_value_display"><i class="fa-solid fa-star"></i> ${restaurant_entry.rating_score}</span>
                                <span>&bull;</span>
                                <span>${restaurant_entry.price_range_text}</span>
                            </div>
                        </div>

                        <div class="food_tags_flow_row">
                            ${food_tags_html_markup}
                        </div>

                        ${restaurant_entry.student_advice ? `
                            <div class="student_advice_callout">
                                <strong>Tip:</strong> ${restaurant_entry.student_advice}
                            </div>
                        ` : ''}
                    </div>

                    <div class="card_footer_actions">
                        <span style="font-size: 0.76rem; color: #64748B;">~${restaurant_entry.walking_time_minutes} min walk</span>
                        <a href="${google_maps_navigation_url}" target="_blank" rel="noopener noreferrer" class="google_maps_action_link">
                            <i class="fa-solid fa-diamond-turn-right"></i> View Maps
                        </a>
                    </div>
                </div>
            `);

            directory_grid_container.append(single_restaurant_card);
        });
    }

    function update_active_food_items_list() {
        let temporary_items_collection = [...food_items_data];

        if (filter_selected_category !== "all") {
            temporary_items_collection = temporary_items_collection.filter((item) => {
                return item.food_category === filter_selected_category;
            });
        }

        active_food_items_list = temporary_items_collection;

        const active_items_container = $("#active_food_items_container");
        active_items_container.empty();
        active_food_items_list.forEach((item) => {
            active_items_container.append(`
                <span class="active_item_badge">
                    <span>${item.food_icon}</span>
                    <span>${item.food_name}</span>
                </span>
            `);
        });

        draw_food_wheel_on_canvas();
    }

    primary_spin_trigger_button.on("click", start_wheel_spin_animation);
    center_spin_hub_button.on("click", start_wheel_spin_animation);
    $("#food_wheel_canvas").on("click", function() {
        if (!is_wheel_currently_spinning) {
            start_wheel_spin_animation();
        }
    });

    $(document).on("keydown", function(keyboard_event) {
        if (keyboard_event.code === "Space" && !$("input, select").is(":focus") && !food_result_popup_modal.hasClass("active_popup")) {
            keyboard_event.preventDefault();
            start_wheel_spin_animation();
        }
        if (keyboard_event.code === "Escape") {
            food_result_popup_modal.removeClass("active_popup");
        }
    });

    $("#instant_random_pick_button").on("click", select_instant_random_food);

    $("#jump_to_all_spots_button").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#spots_directory_section").offset().top - 70
        }, 500);
    });

    $("#popup_spin_again_button").on("click", function() {
        food_result_popup_modal.removeClass("active_popup");
        setTimeout(start_wheel_spin_animation, 300);
    });

    $("#popup_done_action_button, #close_result_popup_button").on("click", function() {
        food_result_popup_modal.removeClass("active_popup");
    });

    food_result_popup_modal.on("click", function(click_event) {
        if ($(click_event.target).is(food_result_popup_modal)) {
            food_result_popup_modal.removeClass("active_popup");
        }
    });

    $("#food_category_select").on("change", function() {
        filter_selected_category = $(this).val();
        update_active_food_items_list();
    });

    $("#budget_level_select").on("change", function() {
        filter_selected_budget = $(this).val();
        render_all_directory_spots();
        if (selected_food_item_record) {
            render_popup_matching_restaurants(selected_food_item_record);
        }
    });

    $("#distance_radius_select").on("change", function() {
        filter_selected_max_distance = parseFloat($(this).val());
        directory_selected_radius = $(this).val();
        render_all_directory_spots();
    });

    $("#reset_all_filters_button").on("click", function() {
        $("#food_category_select").val("all");
        $("#distance_radius_select").val("5");
        $("#budget_level_select").val("all");
        filter_selected_category = "all";
        filter_selected_max_distance = 5.0;
        filter_selected_budget = "all";
        update_active_food_items_list();
        render_all_directory_spots();
    });

    $("#sound_toggle_button").on("click", function() {
        const is_muted_now = window.sound_controller_instance.toggle_sound_mute();
        if (is_muted_now) {
            $(this).addClass("muted");
            $("#sound_status_icon").removeClass("fa-volume-high").addClass("fa-volume-xmark");
        } else {
            $(this).removeClass("muted");
            $("#sound_status_icon").removeClass("fa-volume-xmark").addClass("fa-volume-high");
            window.sound_controller_instance.play_tick_sound();
        }
    });

    $("#voice_toggle_button").on("click", function() {
        window.sound_controller_instance.is_speech_voice_enabled = !window.sound_controller_instance.is_speech_voice_enabled;
        $(this).toggleClass("active", window.sound_controller_instance.is_speech_voice_enabled);
    });

    $("#popup_radius_pill_group").on("click", ".mini_radius_pill", function() {
        $(this).addClass("active").siblings().removeClass("active");
        popup_filter_distance_radius = parseFloat($(this).data("radius"));
        if (selected_food_item_record) {
            render_popup_matching_restaurants(selected_food_item_record);
        }
    });

    $("#popup_sort_dropdown").on("change", function() {
        popup_selected_sort_order = $(this).val();
        if (selected_food_item_record) {
            render_popup_matching_restaurants(selected_food_item_record);
        }
    });

    $("#distance_filter_pills_bar").on("click", ".filter_pill_button", function() {
        $(this).addClass("active").siblings().removeClass("active");
        directory_selected_radius = $(this).data("radius");
        render_all_directory_spots();
    });

    $("#spots_directory_search_input").on("input", function() {
        directory_search_keyword = $(this).val();
        render_all_directory_spots();
    });

    window.addEventListener("resize", function() {
        initialize_canvas_display_resolution();
        draw_food_wheel_on_canvas();
    });

    initialize_canvas_display_resolution();
    update_active_food_items_list();
    render_all_directory_spots();
});
