jQuery(function($){
    var secondary = {
        'default_p': ['--'],
        'issue':['--','Source','Destination','Data','Pipeline', 'Models', 'Workflows', 'Account Settings','Alerts'],
        'query':['--','Source','Destination','Data','Pipeline', 'Models', 'Workflows', 'Account Settings','Alerts']
    }
    var teritiary= {
        'default_p': ['--'],
        'Issue':['--', 'Data load not started', 'Delay in load', 'Incorrect structure of data loaded', 'Transformation issue', 'Others', 'Volume mismatch'],
        'Query':['--', 'Data load not started', 'Delay in load', 'Incorrect structure of data loaded', 'Transformation issue', 'Others', 'Volume mismatch'],
        'Source' : ['--', "Ad Roll","Amazon S3","Amplitude","Apple Search Ads","Appsflyer","Asana","BigQuery","Campaign Manager","Clevertap","Criteo","DataBricks","Dynamo DB","Elastic Search","FB Ads","FB_Pages","FireBase Analytics","FireBolt","Freshdesk","FTP/SFTP","GA360","GA4","Github","Google Ads","Google Clous Storage","Google Drive","Google Play Console","Google Search Console","Google Sheet","Hubspot","IG Business","Intercom","JIRA","Kafka","Klaviyo","Linkedin Ads","Mailchimp","Marketo","Mixpanel","Mongo","MS Ads","Ms-SQL","Mysql","Oracle","Outbrain","Pardot","Postgres","Redshift","REST API","Salesforce","Sendgrid","Shopify","Snowflake","Stripe","Twitter Ads","Webhooks","Xero","Youtube Analytics","Zendesk"],
        'Destination' : ['--', "MySQL", "MS-SQL", "Postgres","Redshift", "Snowflake", "BigQuery", "Databricks", "FireBolt", "Amazon S3"],
        'Data':['--',"Data Integrity", "Delay In Load"],
        'Pipeline':['--','Python Transformation','Drag & Drop','Schema Mapper','Auto-Mapping','Manual Mapping','Load Staus','Job Failures','Failed Events'],
        'Models':['--','Model Failure','Model Types', 'Duplicate Data', 'Others'],
        'Workflows':['--','Step Failure', 'Others'],
        'Account Settings':['--','Add/Remove Member','Account Deletion','Account Creation','Billing Details','Plan Details','Usage Summary']
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