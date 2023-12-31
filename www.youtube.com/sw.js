/** 4099413968710355587 */
self.document = self;
self.window = self;
var ytcfg = {
    d: function() {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {})
    },
    get: function(k, o) {
        return k in ytcfg.d() ? ytcfg.d()[k] : o
    },
    set: function() {
        var a = arguments;
        if (a.length > 1) ytcfg.d()[a[0]] = a[1];
        else {
            var k;
            for (k in a[0]) ytcfg.d()[k] = a[0][k]
        }
    }
};
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "H5_enable_full_pacf_logging": true,
        "H5_use_async_logging": true,
        "action_companion_center_align_description": true,
        "allow_skip_networkless": true,
        "att_web_record_metrics": true,
        "clear_user_partitioned_ls": true,
        "compress_gel": true,
        "deprecate_csi_has_info": true,
        "desktop_image_cta_no_background": true,
        "desktop_log_img_click_location": true,
        "disable_child_node_auto_formatted_strings": true,
        "disable_pacf_logging_for_memory_limited_tv": true,
        "disable_simple_mixed_direction_formatted_strings": true,
        "disable_thumbnail_preloading": true,
        "enable_ab_rp_int": true,
        "enable_ata_dialog_all_web": true,
        "enable_capabilities_for_vdf_on_home_web": true,
        "enable_client_sli_logging": true,
        "enable_gel_log_commands": true,
        "enable_h5_instream_watch_next_params_oarlib": true,
        "enable_h5_video_ads_oarlib": true,
        "enable_handles_account_menu_switcher": true,
        "enable_high_frequency_cookie_rotation": true,
        "enable_mixed_direction_formatted_strings": true,
        "enable_pacf_slot_asde_player_byte_h5": true,
        "enable_pacf_through_ybfe_tv": true,
        "enable_pacf_through_ybfe_tv_for_page_top_formats": true,
        "enable_pacf_through_ysfe_tv": true,
        "enable_pass_sdc_get_accounts_list": true,
        "enable_pl_r_c": true,
        "enable_pl_r_c_s": true,
        "enable_sdf_preroll_player_bytes_video_h5": true,
        "enable_sdf_preroll_player_bytes_video_tv": true,
        "enable_server_stitched_dai": true,
        "enable_skip_ad_guidance_prompt": true,
        "enable_skippable_ads_for_unplugged_ad_pod": true,
        "enable_tectonic_ad_ux_for_halftime": true,
        "enable_third_party_info": true,
        "enable_topsoil_wta_for_halftime_live_infra": true,
        "enable_web_scheduler_signals": true,
        "enable_web_tiered_gel": true,
        "enable_yt_ata_iframe_authuser": true,
        "err_on_pl_r_c": true,
        "export_networkless_options": true,
        "fetch_bid_for_dclk_status": true,
        "fill_single_video_with_notify_to_lasr": true,
        "gcf_config_store_enabled": true,
        "gcf_music_innertube": true,
        "gpa_sparkles_ten_percent_layer": true,
        "h5_companion_enable_adcpn_macro_substitution_for_click_pings": true,
        "h5_enable_generic_error_logging_event": true,
        "h5_inplayer_enable_adcpn_macro_substitution_for_click_pings": true,
        "h5_reset_cache_and_filter_before_update_masthead": true,
        "hide_endpoint_overflow_on_ytd_display_ad_renderer": true,
        "html5_enable_ads_client_monitoring_log_tv": true,
        "html5_enable_single_video_vod_ivar_on_pacf": true,
        "html5_log_trigger_events_with_debug_data": true,
        "html5_recognize_predict_start_cue_point": true,
        "html5_server_stitched_dai_group": true,
        "html5_web_enable_halftime_preroll": true,
        "il_use_view_model_logging_context": true,
        "json_condensed_response": true,
        "kevlar_dropdown_fix": true,
        "kevlar_gel_error_routing": true,
        "kevlar_simp_remove_max_width": true,
        "kevlar_simp_shorts_reset_scroll": true,
        "kevlar_sw_app_wide_fallback": true,
        "kevlar_use_wil_icons": true,
        "kevlar_vimio_use_shared_monitor": true,
        "log_errors_through_nwl_on_retry": true,
        "log_gel_compression_latency": true,
        "log_heartbeat_with_lifecycles": true,
        "log_web_endpoint_to_layer": true,
        "migrate_events_to_ts": true,
        "move_vss_away_from_login_info_cookie": true,
        "mweb_deprecate_skip_ve_logging": true,
        "networkless_gel": true,
        "networkless_logging": true,
        "new_csn_storage_design": true,
        "nwl_send_fast_on_unload": true,
        "nwl_send_from_memory_when_online": true,
        "offline_error_handling": true,
        "pageid_as_header_web": true,
        "polymer_bad_build_labels": true,
        "polymer_verifiy_app_state": true,
        "qoe_send_and_write": true,
        "record_app_crashed_web": true,
        "scheduler_use_raf_by_default": true,
        "show_pom_role_on_web": true,
        "skip_invalid_ytcsi_ticks": true,
        "skip_ls_gel_retry": true,
        "skip_setting_info_in_csi_data_object": true,
        "start_client_gcf": true,
        "start_client_gcf_for_player": true,
        "start_sending_config_hash": true,
        "suppress_error_204_logging": true,
        "sw_nav_request_network_first": true,
        "transport_use_scheduler": true,
        "update_log_event_config": true,
        "use_core_sm": true,
        "use_new_cml": true,
        "use_new_in_memory_storage": true,
        "use_new_nwl_initialization": true,
        "use_new_nwl_saw": true,
        "use_new_nwl_stw": true,
        "use_new_nwl_wts": true,
        "use_player_abuse_bg_library": true,
        "use_request_time_ms_header": true,
        "use_session_based_sampling": true,
        "use_ts_visibilitylogger": true,
        "verify_ads_itag_early": true,
        "vss_final_ping_send_and_write": true,
        "vss_playback_use_send_and_write": true,
        "web_api_url": true,
        "web_dedupe_ve_grafting": true,
        "web_deprecate_service_ajax_map_dependency": true,
        "web_enable_ab_em_rsp": true,
        "web_enable_ab_rsp_cl": true,
        "web_enable_abd_ref": true,
        "web_enable_error_204": true,
        "web_enable_instream_ads_link_definition_a11y_bugfix": true,
        "web_enable_voz_audio_feedback": true,
        "web_forward_command_on_pbj": true,
        "web_log_memory_total_kbytes": true,
        "web_logging_max_batch_hard_limit": true,
        "web_one_platform_error_handling": true,
        "web_prefetch_preload_video": true,
        "web_yt_config_context": true,
        "webfe_disable_ab_em_plb": true,
        "wil_icon_render_when_idle": true,
        "ytidb_fetch_datasync_ids_for_data_cleanup": true,
        "H5_async_logging_delay_ms": 30000.0,
        "addto_ajax_log_warning_fraction": 0.1,
        "log_window_onerror_fraction": 0.1,
        "tv_pacf_logging_sample_rate": 0.01,
        "ytidb_transaction_ended_event_rate_limit": 0.02,
        "ytidb_transaction_ended_event_rate_limit_session": 0.2,
        "ytidb_transaction_ended_event_rate_limit_transaction": 0.1,
        "botguard_async_snapshot_timeout_ms": 3000,
        "check_navigator_accuracy_timeout_ms": 0,
        "compression_disable_point": 10,
        "compression_performance_threshold": 250,
        "gel_min_batch_size": 0,
        "gel_queue_timeout_max_ms": 300000,
        "initial_gel_batch_timeout": 2000,
        "max_body_size_to_compress": 500000,
        "max_prefetch_window_sec_for_livestream_optimization": 0,
        "min_prefetch_offset_sec_for_livestream_optimization": 10,
        "network_polling_interval": 30000,
        "pacf_logging_delay_milliseconds_through_ybfe_tv": 30000,
        "send_config_hash_timer": 0,
        "slow_compressions_before_abandon_count": 4,
        "web_foreground_heartbeat_interval_ms": 28000,
        "web_logging_max_batch": 150,
        "web_smoothness_test_duration_ms": 0,
        "web_smoothness_test_method": 0,
        "wil_icon_max_concurrent_fetches": 9999,
        "ytidb_remake_db_retries": 3,
        "ytidb_reopen_db_retries": 3,
        "web_async_context_processor_impl": "standalone",
        "web_client_version_override": "",
        "kevlar_command_handler_command_banlist": [],
        "web_op_signal_type_banlist": []
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20230807.06.00",
    "INNERTUBE_CONTEXT": {
        "client": {
            "hl": "en",
            "gl": "IN",
            "clientName": "WEB",
            "clientVersion": "2.20230807.06.00"
        }
    },
    "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
    "INNERTUBE_CONTEXT_CLIENT_VERSION": "2.20230807.06.00",
    "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS": {
        "client.name": "WEB"
    }
});
window.ytcfg.obfuscatedData_ = [];
if (self.trustedTypes && self.trustedTypes.createPolicy) {
    const swPolicy = trustedTypes.createPolicy('youtubeServiceWorkerPolicy', {
        createScriptURL: function(ignored) {
            return 'https:\/\/www.youtube.com\/s\/desktop\/3587622d\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js';
        }
    });
    importScripts(swPolicy.createScriptURL(''));
} else {
    importScripts('https:\/\/www.youtube.com\/s\/desktop\/3587622d\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js');
}