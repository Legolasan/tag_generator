$('#secondary').on('change',function(){
    // console.log($('#secondary').val());
    $('#teritiary').html('');
    if ($('#secondary').val()=='json_parsing'){
        $('#teritiary').append('<option value="non_availability">Non Availability</option>');
        $('#teritiary').append('<option value="changing_methods">Changing Methods</option>');
    } 
    else if ($('#secondary').val()=='schema_mapper') {
        $('#teritiary').append('<option value="enable_disable_mapping">Enable/Disable Auto-Mapping</option>');
        $('#teritiary').append('<option value="reset_schema">Reset Schema</option>');
        $('#teritiary').append('<option value="skip_schema">Skip Schema</option>');
        $('#teritiary').append('<option value="manual_mapping">Manual Mapping</option>');
        $('#teritiary').append('<option value="field_mapping">Field Mapping</option>');
        $('#teritiary').append('<option value="primary_key_creation">Primary Key Creation</option>');
        $('#teritiary').append('<option value="auto-promotion">Auto Promotion</option>');
        $('#teritiary').append('<option value="partitions">Partition</option>');
        $('#teritiary').append('<option value="field_warning">Field Warnings</option>');
    }
    else if ($('#secondary').val()=='job_configuration') {
        $('#teritiary').append('<option value="full_load">Full Load</option>');
        $('#teritiary').append('<option value="delta_timestamp">Delta Timestamp</option>');
        $('#teritiary').append('<option value="unique_incremental">Unique Incremental</option>');
        $('#teritiary').append('<option value="cdc">Change Data Capture</option>');
        $('#teritiary').append('<option value="delay_configuration">Delay Configuration</option>');
    }
    else if ($('#secondary').val()=='pipeline_configuration') {
        $('#teritiary').append('<option value="ssh_configurations">SSH Configurartion</option>');
        $('#teritiary').append('<option value="ssl_connections">SSL Connections</option>');
        $('#teritiary').append('<option value="merge_functionalities">Merge Functionality</option>');
        $('#teritiary').append('<option value="historical_loads">Historical Loads</option>');
        $('#teritiary').append('<option value="delay_configuration">Delay Configuration</option>');
        $('#teritiary').append('<option value="prefixes">Prefix</option>');
        $('#teritiary').append('<option value="load_all_database">Load All Database</option>');
        $('#teritiary').append('<option value="custom_schedule">Custom Schedule</option>');
    }
    else if ($('#secondary').val()=='transformation') {
        $('#teritiary').append('<option value="python_scripts">Python Scripts</option>');
        $('#teritiary').append('<option value="drag_drop">Drag & Drop</option>');
        $('#teritiary').append('<option value="usability">Usability</option>');
    }
    else if ($('#secondary').val()=='model'){
        $('#teritiary').append('<option value="model_configuration">Model Configuration</option>');
        $('#teritiary').append('<option value="query_configuration">Query Configuration</option>');
        $('#teritiary').append('<option value="schedules">Schedules</option>');
    }
    else if ($('#secondary').val()=='model_failure'){
        $('#teritiary').append('<option value="model_configuration">Model Configuration</option>');
        $('#teritiary').append('<option value="destination_limitation">Destination Limiation</option>');
        $('#teritiary').append('<option value="query_configuration">Query Configuration</option>');
    }
    else if ($('#secondary').val()=='workflow'){
        $('#teritiary').append('<option value="workflow_setup">Workflow Setup</option>');
        $('#teritiary').append('<option value="schedules">Schedules</option>');
        $('#teritiary').append('<option value="usability">Usability</option>');
    }
    else if ($('#secondary').val()=='workflow_failure'){
        $('#teritiary').append('<option value="workflow_setup">Workflow Setup</option>');
        $('#teritiary').append('<option value="schedules">Schedules</option>');
    }
    else if ($('#secondary').val()=='activity_log'){
        $('#teritiary').append('<option value="usability">Usability</option>');
        $('#teritiary').append('<option value="advanced_logging">Advanced Logging</option>');
    }
    else if ($('#secondary').val()=='alerts_preference'){
        $('#teritiary').append('<option value="setup_alerts">Setup Alerts</option>');
        $('#teritiary').append('<option value="behaviour">Behaviour</option>');
        $('#teritiary').append('<option value="manage_notification">Manage Notification</option>');
    }
    else if($('#secondary').val()=='user_management'){
        $('#teritiary').append('<option value="add_remove_user">Add/Remove User</option>');
        $('#teritiary').append('<option value="passowrd_reset">Password Reset</option>');
        $('#teritiary').append('<option value="login_issues">Login Issues</option>');
        $('#teritiary').append('<option value="user_privilege">User Privilege</option>');
    }
    else if ($('#secondary').val()=='account'){
        $('#teritiary').append('<option value="trial_extension">Trial Extension</option>');
        $('#teritiary').append('<option value="account_migration">Account Migration</option>');
        $('#teritiary').append('<option value="account_creation">Account Creation</option>');
        $('#teritiary').append('<option value="account_deletion">Account Deletion</option>');
    }
    else if ($('#secondary').val()=='billing_payment'){
        $('#teritiary').append('<option value="invoices">Invoices</option>');
        $('#teritiary').append('<option value="failed_payments">Failed Payments</option>');
        $('#teritiary').append('<option value="subscriptions">Subscriptions</option>');
        $('#teritiary').append('<option value="on_demand_add_ons">On-Demand & Add-Ons</option>');
        $('#teritiary').append('<option value="event_waivers">Event Waivers</option>');
    }
    else if ($('#secondary').val()=='pricing_plan'){
        $('#teritiary').append('<option value="free_plans">Free Plans</option>');
        $('#teritiary').append('<option value="custom_plans">Custom Plans</option>');
        $('#teritiary').append('<option value="on_demand_add_ons">On-Demand & Add-Ons</option>');
        $('#teritiary').append('<option value="subscriptions">Subscriptions</option>');
    }
    else if ($('#secondary').val()=='hevo_api'){
        $('#teritiary').append('<option value="setup_api">Setup API</option>');
        $('#teritiary').append('<option value="usability">Usability</option>');
    }
    else if ($('#secondary').val()=='hevo_activate'){
        $('#teritiary').append('<option value="setup_api">Setup API</option>');
        $('#teritiary').append('<option value="faq">FAQ</option>');
    }
    else if ($('#secondary').val()=='load_job'){
        $('#teritiary').append('<option value="resource_failure">Resource Failure</option>');
        $('#teritiary').append('<option value="constraint_violation">Constraint Violation</option>');
        $('#teritiary').append('<option value="destination_authorization_error">Destination Authorization Error</option>'); 
    }
    else if ($('#secondary').val()=='data_integrity'){
        $('#teritiary').append('<option value="data_freshness">Data Freshness</option>');
        $('#teritiary').append('<option value="record_update_misssing">Record/Update Missing</option>');
    }
    else if ($('#secondary').val()=='ui_ux_experience'){
        $('#teritiary').append('<option value="pipeline_template">Pipeline Template</option>');
        $('#teritiary').append('<option value="table_selection">Table Selection</option>');
        $('#teritiary').append('<option value="others">Others</option>');
        $('#teritiary').append('<option value="table_mode_configuration">Table Mode Configuration</option>');
        $('#teritiary').append('<option value="hevo_api">Hevo API</option>');
        $('#teritiary').append('<option value="bi_tools">BI Tools</option>');
        $('#teritiary').append('<option value="managed_warehouse">Managed Warehouse</option>');
    }
    else if ($('#secondary').val()=='product_limitation'){
        $('#teritiary').append('<option value="pipeline">Pipeline</option>');
        $('#teritiary').append('<option value="model">Model</option>');
        $('#teritiary').append('<option value="workflow">Workflow</option>');
        $('#teritiary').append('<option value="Hevo Activate">Hevo Activate</option>');
        $('#teritiary').append('<option value="hevo_api">Hevo API</option>');
    }
    else if ($('#secondary').val()=='platform_down'){
        $('#teritiary').append('<option value="not_applicable">Not Applicable</option>');
    }
    else if ($('#secondary').val()=='compliance_security'){
        $('#teritiary').append('<option value="not_applicable">Not Applicable</option>');
    }
    else if ($('#secondary').val()=='source_configuration'){
        $('#teritiary').append('<option value="mongo">Mongo DB</option>');
        $('#teritiary').append('<option value="ms_sql">MS SQL</option>');
        $('#teritiary').append('<option value="mysql">MySQL</option>');
        $('#teritiary').append('<option value="postgres">Postgres</option>');
        $('#teritiary').append('<option value="sdk_steaming">SDK & Streaming</option>');
        $('#teritiary').append('<option value="cloud_storage">Cloud Storage</option>');
        $('#teritiary').append('<option value="colud_application">Colud Application</option>');
        $('#teritiary').append('<option value="analytics">Analytics</option>');
        $('#teritiary').append('<option value="marketing_email">Marketing & Email</option>');
        $('#teritiary').append('<option value="payments">Payments</option>');
    }
    else if ($('#secondary').val()=='destination_configuration'){
        $('#teritiary').append('<option value="redshift">Redshift</option>');
        $('#teritiary').append('<option value="snowflake">Snowflake</option>');
        $('#teritiary').append('<option value="s3">AWS S3</option>');
        $('#teritiary').append('<option value="bigquery">BigQuery</option>');
        $('#teritiary').append('<option value="ms_sql">MS SQL</option>');
        $('#teritiary').append('<option value="mysql">MySQL</option>');
        $('#teritiary').append('<option value="postgres">Postgres</option>');
    }
    else if ($('#secondary').val()=='source_authorization'){
        $('#teritiary').append('<option value="facebook">Facebook</option>');
        $('#teritiary').append('<option value="ms_ads">MS ADS</option>');
        $('#teritiary').append('<option value="google_connectors">Google Connectors</option>');
        $('#teritiary').append('<option value="hubspot">HubSpot</option>');
        $('#teritiary').append('<option value="ecommerce">E-Commerce</option>');
        $('#teritiary').append('<option value="appsflyer">AppsFlyer</option>');
    }
    else if ($('#secondary').val()=='transformation_error'){
        $('#teritiary').append('<option value="python_scripts">Python Scripts</option>');
        $('#teritiary').append('<option value="drag_drop">Drag & Drop</option>');
        $('#teritiary').append('<option value="data_incompatibility">Data Incompatibility</option>');
        $('#teritiary').append('<option value="script_exception">Script Exception</option>');
        $('#teritiary').append('<option value="invalid_script">Invalid Script</option>');
    }
    else if ($('#secondary').val()=='platform_down'){
        $('#teritiary').append('<option value="not_applicable">Not Applicable</option>');
    }
    else if ($('#secondary').val()=='backend_configuration_change'){
        $('#teritiary').append('<option value="not_applicable">Not Applicable</option>');
    }
    else if ($('#secondary').val()=='workarounds'){
        $('#teritiary').append('<option value="not_applicable">Not Applicable</option>');
    }
    else if ($('#secondary').val()=='source_name'){
        $('#teritiary').replaceWith('<input class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="enhancement_name" type="text" />');
    }
    else if ($('#secondary').val()=='destination_name'){
        $('#teritiary').replaceWith('<input class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="destination_name" type="text" />');
    }
    else if ($('#secondary').val()=='others_name'){
        $('#teritiary').replaceWith('<input class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="others_name" type="text" />');
    }
    else {
        $('#teritiary').append('< value="non_availability">Non Availability</input>');
    }
});