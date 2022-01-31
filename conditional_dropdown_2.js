jQuery(function($){
    var secondary = {
        'default_p': ['--'],
        'issue':['--','Issue','Source', 'Destination'],
        'query':['--','Query','Source', 'Destination'],
        'spam':['--','Spam']
    }
    var teritiary= {
        'default_p': ['--'],
        'Issue':['--','Delay in data load','Volume of data mismatch','Data load not started','Incorrect structure of data loaded','Issue with transformation','Others'],
        'Query':['--','NA'],
        'Source' : ['--', "Ad Roll","Amazon S3","Amplitude","Apple Search Ads","Appsflyer","Asana","BigQuery","Campaign Manager","Clevertap","Criteo","DataBricks","Dynamo DB","Elastic Search","FB Ads","FB_Pages","FireBase Analytics","FireBolt","Freshdesk","FTP/SFTP","GA360","GA4","Github","Google Ads","Google Clous Storage","Google Drive","Google Play Console","Google Search Console","Google Sheet","Hubspot","IG Business","Intercom","JIRA","Kafka","Klaviyo","Linkedin Ads","Mailchimp","Marketo","Mixpanel","Mongo","MS Ads","Ms-SQL","Mysql","Oracle","Outbrain","Pardot","Postgres","Redshift","REST API","Salesforce","Sendgrid","Shopify","Snowflake","Stripe","Twitter Ads","Webhooks","Xero","Youtube Analytics","Zendesk",'Others'],
        'Destination' : ['--', "MySQL", "MS-SQL", "Postgres","Redshift", "Snowflake", "BigQuery", "Databricks", "FireBolt", "Amazon S3",'Others'],
        'Spam':['--','Spam']
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