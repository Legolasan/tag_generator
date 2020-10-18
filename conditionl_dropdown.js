$('#primary').on('change',function(){
    console.log($('#primary').val());
    $('#secondary').html('');
    if($('#primary').val()=='data_integrity'){
        $('#secondary').append('<option value="data_missing">Record missing in Destination</option>');
        $('#secondary').append('<option value="update_missing">Update missing in Destination</option>');
    }else if($('#primary').val()=='user_education'){
        $('#secondary').append('<option value="product_limiation">Product Limitation</option>');
        $('#secondary').append('<option value="pricing">Pricing</option>');
        $('#secondary').append('<option value="billing_payment">Billing & Payment</option>');
        $('#secondary').append('<option value="product_faq">Product FAQ</option>');
        $('#secondary').append('<option value="job_configs">Job Config</option>');
        $('#secondary').append('<option value="overview_summary">Overview & Summary</option>');
        $('#secondary').append('<option value="transformation">Transformation</option>');
        $('#secondary').append('<option value="json_parsing">Json Parsing Strategy</option>');
        $('#secondary').append('<option value="schema_mapper">Schame Mapper</option>');
        $('#secondary').append('<option value="activity_log">Activity Log</option>');
        $('#secondary').append('<option value="hevo_api">Hevo API</option>');
        $('#secondary').append('<option value="replication_schedule">Replication Schedule</option>');
        $('#secondary').append('<option value="load_status_delay">Load Status & Delay</option>');
        $('#secondary').append('<option value="pipeline_config">Pipeline Config</option>');
        $('#secondary').append('<option value="source_config">Source Config</option>');
        $('#secondary').append('<option value="destination_config">Destination Config</option>');
        $('#secondary').append('<option value="models">Models</option>');
        $('#secondary').append('<option value="workflows">Workflows</option>');
        $('#secondary').append('<option value="team_settings">Team Settings</option>');
        $('#secondary').append('<option value="alerts_notifications">Alerts & Notifications</option>');
    }else if($('#primary').val()=='errors'){
        $('#secondary').append('<option value="job_configs">Job Config</option>');
        $('#secondary').append('<option value="overview_summary">Overview & Summary</option>');
        $('#secondary').append('<option value="transformation">Transformation</option>');
        $('#secondary').append('<option value="schema_mapper">Schame Mapper</option>');
        $('#secondary').append('<option value="load_status_delay">Load Status & Delay</option>');
        $('#secondary').append('<option value="pipeline_config">Pipeline Config</option>');
        $('#secondary').append('<option value="source_config">Source Config</option>');
        $('#secondary').append('<option value="destination_config">Destination Config</option>');
        $('#secondary').append('<option value="models">Models</option>');
        $('#secondary').append('<option value="workflows">Workflows</option>');
    }else if($('#primary').val()=='intermittent_issue'){
        $('#secondary').append('<option value="job_configs">Job Config</option>');
        $('#secondary').append('<option value="overview_summary">Overview & Summary</option>');
        $('#secondary').append('<option value="transformation">Transformation</option>');
        $('#secondary').append('<option value="schema_mapper">Schame Mapper</option>');
        $('#secondary').append('<option value="load_status_delay">Load Status & Delay</option>');
        $('#secondary').append('<option value="pipeline_config">Pipeline Config</option>');
        $('#secondary').append('<option value="source_config">Source Config</option>');
        $('#secondary').append('<option value="destination_config">Destination Config</option>');
        $('#secondary').append('<option value="models">Models</option>');
        $('#secondary').append('<option value="workflows">Workflows</option>');
        $('#secondary').append('<option value="hevo_api">Hevo API</option>');
    }else if($('#primary').val()=='enhancement'){
        $('#secondary').append('<option value="source">Source</option>');
        $('#secondary').append('<option value="destination">Destination</option>');
        $('#secondary').append('<option value="other_enhancement">Other Enhancement</option>');
        $('#secondary').append('<option value="user_experience">User Experience</option>');
    }else if($('#primary').val()=='account_management'){
        $('#secondary').append('<option value="account_creation">Account Creation</option>');
        $('#secondary').append('<option value="account_migration">Account Migration</option>');
        $('#secondary').append('<option value="account_deletion">Account Deletion</option>');
        $('#secondary').append('<option value="user_management">User Management</option>');
        $('#secondary').append('<option value="trial_extension">Trial Extension</option>');
        $('#secondary').append('<option value="sign_up">Sign Up</option>');
        $('#secondary').append('<option value="source">Source</option>');
    }else if($('#primary').val()=='compliance'){
        $('#secondary').append('<option value="platform_security_compliances">Platform Security & Compliances</option>');
        $('#secondary').append('<option value="data_retention_policy">Data Retention Policy</option>');
    }else if($('#primary').val()=='platform_down'){
        $('#secondary').append('<option value="hot_fix">Hot Fix</option>');
    }
    else{
        $('#secondary').append('<option value="hot_fix">Not Applicable</option>');
    }
});