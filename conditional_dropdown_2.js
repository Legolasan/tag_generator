jQuery(function($){
    var secondary = {
        'default_p': ['--'],
        'issue':['--','Issue'],
        'user_education': ['--','Account', 'Advanced Settings', 'Alerts', 'Auto-Mapping', 'Manual Mapping','Destination Configuration', 'Events','Hevo API', 'Ingestion Schedules', 'JSON Strategies', 'Job Configurations', 'Limitations', 'Load Delay', 'Load Schedules', 'Load Status', 'Manual Mapping', 'Models', 'Overview Page Functionalities', 'Payments', 'Pipeline Modes', 'Pricing & Billing', 'Source Configuration', 'Transformations', 'User Management', 'Workflows'],
        'errors':['--', 'Destination Configuration', 'Failed Events', 'Intermittent Errors','Job Failures', 'Load Failures', 'Model Failure', 'Schema Mapper Errors', 'Source Configuration', 'Workflow Failure'],
        'bug': ['--', 'Account', 'Auto-Mapping', 'Destination Configuration', 'Hevo API', 'Hevo Activate', 'Intermittent Errors', 'Job Failures', 'Limitation', 'Load Failures', 'Models', 'Overview Page Functionalities', 'Platform Down', 'Source Configuration', 'Transformation', 'Workflows'],
        'data_integrity':['--', 'Record/Update Missing', 'Data Freshness'],
        'enhancement': ['--','Source', 'Destination', 'Product Improvement', 'UI/UX Experience'],
        'product_demo': ['--', 'Hevo Activate', 'Models', 'Overall', 'Pipelines', 'Workflows'],
        'platform':['--','Compliance & Security', 'Status', 'Terms & Conditions'],
        'faq':['--', 'Account Login', 'Advanced Settings', 'Destination Configuration', 'Data Replication','Events Count', 'Hevo Activate', 'Hevo Managed BigQuery', 'Job Configurations', 'Load Status', 'Models', 'Overview Page Functionalities', 'Payments & Invoice', 'Pipelines', 'Plan Details', 'Platform', 'Pricing & Billing', 'Skip Objects', 'Schema Refresh', 'Transformation', 'User Management', 'Workflows'],
        'activate':['--','Errors', 'Usability', 'Product Behaviour', 'Demo', 'Feature Request'],
        'spam':['--','Not Applicable'],
        'not_an_issue':['--','Not Applicable']
    }
    var teritiary= {
        'default_p': ['--'],
        'Issue':['--', 'Data load not started', 'Delay in load', 'Incorrect structure of data loaded', 'Transformation issue', 'Others', 'Volume mismatch'],
        'Source Configuration' : ['--', "ADROLL","AMPLITUDE_ANALYTICS","ANDROID_SDK","APPLE_SEARCH_ADS","APPSFLYER","ATLAS_MONGODB","AURORA","AWS_AURORA_POSTGRES","AWS_ELASTICSEARCH","AWS_RDS_MARIA_DB","AWS_RDS_MSSQL","AWS_RDS_MYSQL","AWS_RDS_ORACLE","AWS_RDS_POSTGRES","AZURE_MARIA_DB","AZURE_MYSQL","AZURE_POSTGRES","AZURE_SQL","CLEVERTAP","CONFLUENT_CLOUD","CRITEO","DRIVE","DYNAMODB","ELASTICSEARCH","FACEBOOK_ADS","FACEBOOK_PAGES","FRESHDESK","FTP","GCP_MS_SQL","GCP_MYSQL","GCP_POSTGRES","GCS","GITHUB","GOOGLE_ADWORDS","GOOGLE_ANALYTICS","GOOGLE_CAMPAIGN_MANAGER","GOOGLE_PLAY_CONSOLE","GOOGLE_SEARCH_CONSOLE","GOOGLE_SHEETS","HUBSPOT","INTERCOM","INTERCOM_WEBHOOK","IOS_SDK","JIRA_CLOUD","KAFKA","KLAVIYO","LINKEDIN_ADS","MAILCHIMP","MAILCHIMP_WEBHOOK","MARIA_DB","MARKETO","MICROSOFT_ADS","MIXPANEL","MONGODB","MS_SQL","MYSQL","ORACLE","ORACLE_MYSQL","OUTBRAIN","PARDOT","POSTGRES","REDSHIFT","RESTAPI","SALESFORCE","SALESFORCE_MARKETING_CLOUD","SEGMENT","SENDGRID","SENDGRID_WEBHOOK","SF_HEROKU_POSTGRES","SHOPIFY","SHOPIFY_WEBHOOK","STRIPE","TOKU_DB_MYSQL","TWITTER_ADS","WEBHOOK","INSTAGRAM_BUSINESS","BIGQUERY","GOOGLE_ANALYTICS_360","YOUTUBE_ANALYTICS"],
        'Destination Configuration' : ['--', 'BIGQUERY', 'MSSQL', 'MYSQL', 'POSTGRES', 'REDSHIFT', 'SNOWFLAKE'],
        'Account': ['--', 'Account Creation', 'Account Deletetion', 'Account Migration', 'Trial Extension', 'Login Issues'],
        'Advanced Settings': ['--','Connect Through SSH', 'Destination Prefix', 'Load All Databases', 'Load Historical Data, Delay Configuration', 'Merge Tables', 'Name Sanitization', 'Use SSL','Populating Load Timestamp'],
        'Alerts': ['--', 'Alerts Enhancement', 'Alerts Management', 'Alerts Preference'],
        'Auto-Mapping': ['--', 'Enable-Disable','Auto-Promotion', 'Behaviour', 'Field Mappings', 'Limitations', 'Partition', 'Usability'],
        'Manual Mapping': ['--', 'Drop Table', 'Field Configuration', 'Set Primary Key', 'Change Table', 'Field Warnings'],
        'Hevo API': ['--', 'Usability', 'Limitations', 'Enhancement', 'Error/Bug'],
        'Ingestion Schedules': ['--', 'File Based Connectors', 'Log Replication', 'REST API', 'SaaS Connectors', 'Table Replication', 'Webhooks'],
        'JSON Strategies': ['--', 'SPLIT', 'COLLAPSE', 'Un-Availability'],
        'Job Configurations': ['--', 'CDC', 'Delta Timestamp', 'Full Load', 'Unique Incremental', 'Change Tracking'],
        'Limitations':['--', 'Data Loading', 'Data Replicating', 'Destination Configuration', 'Hevo API', 'Hevo Activate', 'Models', 'Pipeline', 'Souce Configuration'],
        'Load Delay': ['--', 'Loading Schedule', 'JDBC Destinations', 'Batch Processing', 'Pending Events'],
        'Load Schedules': ['--', 'JDBC Destinations', 'Custom Schedules', 'Schedule Behaviour'],
        'Load Status': ['--','Not Applicable'],
        'Models': ['--', 'Activity Log', 'Model Types', 'Query History', 'Replication Schedules', 'Usability', 'Not Applicable'],
        'Overview Page Functionalities': ['--', 'Bulk Options', 'Stats', 'Job Status', 'Offset Management'],
        'Payments':['--', 'Failed Payments', 'Payment Schedule', 'Invoices', 'On-Demand'],
        'Pipeline Modes':['--', 'Log Replication', 'Table Mode', 'Custom SQL'],
        'Pricing & Billing': ['--', 'Plan Details', 'Discounts/Offers', 'Plan Change', 'Pricing Enquiry', 'Not Applicable'],
        'Transformations':['--', 'Python Scripts', 'Drag & Drop', 'Usability', 'Limiations'],
        'User Management': ['--', 'Add/Remove User', 'User Privileges', 'Limitations'],
        'Workflows':['--', 'Usability', 'Limiations'],
        'Failed Events': ['--', 'Job Configuration', 'Schema Failures', 'Sink Failures', 'Transformation'],
        'Intermittent Errors': ['--', 'Source', 'Destination', 'Infrastructure'],
        'Job Failures':['--', 'Log Replication', 'Table Modes'],
        'Load Failures': ['--', 'BIGQUERY', 'MSSQL', 'MYSQL', 'POSTGRES', 'REDSHIFT', 'SNOWFLAKE'], 
        'Model Failure':['--', 'Intermittent', 'Invalid Query', 'Invalid Setup', 'Destination Limiation'],
        'Schema Mapper Errors': ['--', 'Field Failures', 'In-Compatibility', 'Mapping Failure'],
        'Workflow Failure': ['--', 'Step Failure'],
        'Data Replication': ['--', 'Log Replication', 'Table Replication', 'With Primary Key', 'Without Primary Key', 'Refresher Tasks', 'Appending Data'],
        'Hevo Activate': ['--', 'Not Applicable'],
        'Limitation':['--', 'Not Applicable'],
        'Platform-Down': ['--', 'Not Applicable'],
        'Transformation': ['--', 'Python Script', 'Drag & Drop'],
        'Not Applicable': ['--', 'Not Applicable'], 
        'Source': ['--', 'Not Applicable'],
        'Destination': ['--', 'Not Applicable'],
        'Product Improvement': ['--', 'Not Applicable'],
        'UI/UX Experience': ['--', 'Not Applicable'],
        'Overall' : ['--', 'Not Applicable'],
        'Pipeline': ['--', 'Not Applicable'],
        'Workflow': ['--', 'Not Applicable'],
        'Status': ['--', 'Not Applicable'],
        'Terms & Conditions' :  ['--', 'Not Applicable'],
        'Compliance & Security' : ['--', 'Not Applicable'],
        'Account Login': ['--', 'Not Applicable'],
        'Events Count': ['--', 'Incremental Load', 'Historical Load', 'General'],
        'Events': ['--', 'Incremental Load', 'Historical Load', 'General'],
        'Hevo Managed BigQuery': ['--', 'Acceptable Sources', 'Not Applicable'],
        'Payments & Invoice': ['--', 'Not Applicable'],
        'Pipelines':['--', 'Pipeline Modes', 'Data Replication', 'Table Mapping'],
        'Plan Details': ['--', 'Free','Starter', 'Business', 'VPC Peering', 'Reverse SSH'], 
        'Platform':['--', 'Status', 'Not Applicable'],
        'Skip Objects': ['--', 'From Overview', 'From Transformation', 'From Mapper', 'Others'],
        'Schema Refresh': ['--', 'Not Applicable'],
        'Errors': ['--', 'Not Applicable'],
        'Usability':['--', 'Not Applicable'],
        'Product Behaviour': ['--', 'Not Applicable'],
        'Demo': ['--', 'Not Applicable'],
        'Feature-Request': ['--', 'Not Applicable'],
        'Record/Update Missing': ['--', 'Log Replication', 'Table Mode', 'SaaS Connection'], 
        'Data Freshness': ['--', 'FACEBOOK_ADS', 'FACEBOOK_PAGES', 'FRESHDESK', 'CLEVERTAP', 'CRITEO','GOOGLE_ADWORDS','GOOGLE_ANALYTICS','GOOGLE_CAMPAIGN_MANAGER','GOOGLE_PLAY_CONSOLE', 'GOOGLE_SEARCH_CONSOLE','GOOGLE_SHEETS','HUBSPOT','INTERCOM','KLAVIYO','LINKEDIN_ADS','MAILCHIMP','MARKETO','MICROSOFT_ADS','MIXPANEL','OUTBRAIN','SALESFORCE','SALESFORCE_MARKETING_CLOUD','SEGMENT','SHOPIFY','STRIPE','TWITTER_ADS','INSTAGRAM_BUSINESS','GOOGLE_ANALYTICS_360','YOUTUBE_ANALYTICS']
    }
    var $secondary = $('#secondary');
    $('#primary').change(function (){
        var primary= $(this).val(), lcns = secondary[primary] || [];
        var html = $.map(lcns, function(lcn){
            return '<option value="' + lcn + '">' + lcn + '</option>'
        }).join('');
        $secondary.html(html)
    });
    var $teritiary = $('#teritiary');
    $('#secondary').change(function (){
        var secondary = $(this).val(), lcns = teritiary[secondary] || [];
        var html = $.map(lcns, function(lcn){
            return '<option value="' + lcn + '">' + lcn + '</option>'
        }).join('');
        $teritiary.html(html)
    });
});