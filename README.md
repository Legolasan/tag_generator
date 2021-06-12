# Intercom Tag Generator

Tagging is the process of assigning meaningful labels to your customer conversations in Intercom. By meaningful labels, I mean labels that specifically describe what the Intercom conversation is about — in essence, a brief one or two-word summary. These labels, otherwise known as tags, act as a reminder so that you can later remember the contents of the conversation, at a glance.

# Conversation tagging in practice

## Establishing a tagging framework

The first step in your tagging journey is to establish a tagging framework — a consistent set of tags which can summarise the contents of a customer’s conversation in a few words and can be easily understood by the members of your team.

## Recommended tag structure

> TAG -> Primary + Secondary + Teritiary

 - Primary : The category component enables you to map **high-level trends**.
 - Secondary: The second component of your tag introduces another layer of detail about the conversation — **specifying the impact area**. 
 - Documentation: To accomplish the **documentation purpose**.

## The combined tag

> User Education - Source Configuration - Mongo DB

For the above tag, the convesation was sort of user having an issue *while configuring the source connection. We have guided them with documentation to resolve it.* 


# Applying your tagging framework

Now that you know the theory behind setting up a tagging framework, it’s time to apply it in practice.

## Step 1: Generate Tags

From the provisioned chrome extension, please generate the appropirate tags. 

## Step 2: Apply the Tags

You can now copy the tag from the extenstion window, and paste it on intercom. 

# Setting up the chrome extension

 1. Download this repository as zip. 
 2. Un-Zip downloaded file. 
 3. You should be seeing the folder called **tag_generator-master**. 
 4. Now go to the following link [chrome://extensions](chrome://extensions)
 5. Enable the **Developer Mode** (on your right top screen)
 6. Click on **Load Unpacked**
 7. Now, you can choose the folder that you have un-zipped. 
 8. That's all. Good to go. 

# Version 
* Current Version : v2.0
