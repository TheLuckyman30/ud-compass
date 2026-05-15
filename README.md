# Overview
Our capstone project was to design a functional AI assistant to aid UD students, staff, and other users of UD resources in finding said resources on the MyUD web portal. As it is now, MyUD can be difficult to navigate, and can be even more difficult if you do not know what resource can fulfill your need. With this in mind, we set out to create a helpful agent to be embedded into the webpage as well as improving the overall UI/UX.
\
\
Towards this end, we have collected all of the resources and used the data to train an AI agent as well as troubleshoot discrepancies between the actual data and the AI generated responses.

# Implementation
One of the first things we did was collect all of the links that MyUD has. Unfortunately, we did not have access to the database that MyUD utilizes, so we opted to create web scrapers that gather all of the data off of MyUD and output the result as a csv file. To improve accuracy and ensure more complete data collection, two separate web scrapers were developed independently and their results were combined. One scraper was developed using Python and Selenium and the other was developed using Node.js, TypeScript, Puppeteer, and Cheerio.
\
\
The csv files created were then combined and put into a Microsoft Sharepoint, so that any changes made to the data would be immediately reflected in the bot. Furthermore, we added extra details to the data in the sharepoint, particularly agent descriptions to help the bot identify the functions of each resource. To further develop the agent’s knowledgebase, we also added resources from UD websites, giving the agent an understanding of policies that could help users with non-navigation questions.
\
\
The agent itself was created using Microsoft Copilot Studio and uses the GPT-4.1 model to generate responses. The sharepoint we created is linked to the agent as one of its knowledge sources. Additionally, we provided detailed instructions to the bot explaining what its role is, how to access all of the resources, how to format responses, etc… All testing was done on Microsoft Copilot Studio as it has an integrated chat terminal for interacting with the agent.
\
\
Finally, a website mockup was designed and developed to serve as a functional prototype on what a redesigned MyUD would look like. We started off by creating several Figma prototypes to work out the design of our website. We then translated this into a small working prototype utilizing React, TypeScript, HTML, CSS, and Mantine UI as the main component library.


# Obstacles
Our project faced a few notable setbacks. The first being lacking access to the MyUD database, as previously mentioned. We were able to overcome this with a web scraping tool, however the data retrieved is not guaranteed to be as reliable as the original source. That being said, it is enough to create a proof of concept.
\
\
Our next major setback was unreliability with the AI agent. The agent produced significant hallucinations, particularly regarding link generation. This was a major obstacle, as unreliability with the chatbot made for inconsistent or unhelpful answers, and without knowing how it was generating the incorrect responses, it made it difficult to troubleshoot. In an effort to fix this, we have continually revised the agent’s instructions and gave varying input prompts in an attempt to better understand the nature of the issue.

# Known Issues/Bugs
- The copilot agent will give sometimes give non-working links
- The search bar on the website currently has duplicate entries. This is due to the resources on MyUD appearing in multiple categories

# Future Work
Further testing and troubleshooting of the agent will be necessary for a more reliable product. More work will need to be done to ensure the agent is referencing the knowledgebase it has been given rather than making assumptions from its general knowledgebase, as we believe this to be the root of many issues regarding link hallucinations.
\
\
In addition to this, a more robust website should be developed to house the agent in, as well as to make MyUD more user friendly. While we do currently have a website that is capable of housing the agent, it is simply a proof of concept and is not fully functional. Further development would be to incorporate functional links as well as connecting it to the preexisting backend while also implementing new UI/UX features for easier navigation and accessibility.
\
\
Furthemore, the website does not contain a working version of our agent that we created. This is due to having issues with authenticating the agent with our website and not having the proper permissions to set up billing. Future work should include finding a way to properly authenticate the bot so it can access the sharepoint resources when being used on a website. In production, there should be a payment plan for the bot setup so that it does not run out of credits while being used. Additionally, a chatbot interface would need to be implemented. You may implement the designs we created in figma, or simply use them as a reference.
\
\
Once the agent is fully deployed and accessible to users, further analysis will need to be conducted regarding user engagement, response accuracy, and feedback in order to identify areas of improvement and better meet the needs of users.

# Installation & Running Locally
Open your terminal and run
```
git clone https://github.com/TheLuckyman30/ud-compass.git
cd ud-compass
```

To install and then run the project, run:
```
npm install
npm run dev
```

The website will automatically deploy when there is a push to main. If you want to modify deploy behavior, please modify ```.github/workflow/deploy.yml```
# Architecture Overview 
## Webscrapers
### Webscraper 1
- Python
- Selenium
- Repo Link: 

### Webscraper 2
- Node.js
- TypeScript
- Cheerio
- Puppeteer
- Repo Link:

## Copilot Agent
- Microsoft Copilot Studio
- Microsoft Sharepoint (contains all the MyUD resources)

## Website
- Vite
- React
- TypeScript
- TailwindCSS
- Mantine UI (Component library)
- Zustand (Global state management)

# Important Folders/Files
- ```/src/utils/zustand``` 
