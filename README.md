# my-app
 Features :

      1) Loading Screen

  ![Screenshot (193)](https://github.com/Pooja-Manoharan/my-app/assets/114828454/ddf5de77-f106-4110-905e-68c7f1ac88a5)


      2) Google authentication login 

  ![Screenshot (190)](https://github.com/Pooja-Manoharan/my-app/assets/114828454/7a1ca72c-29d8-494c-b1d2-1de0463740d2)


      3)Api Based Search box

  ![Screenshot (189)](https://github.com/Pooja-Manoharan/my-app/assets/114828454/d35919cf-c614-4a1a-a616-46831359ae5b)


  ![Screenshot (191)](https://github.com/Pooja-Manoharan/my-app/assets/114828454/cc859f98-dfbb-4554-bc93-82b9d4330ee5)


      ![Screenshot (192)](https://github.com/Pooja-Manoharan/my-app/assets/114828454/236c7931-67b0-46fc-8b9e-aa030a92b54c)


      
Mock APIs are typically used for development and testing purposes to simulate the behavior of real APIs. They are designed to provide sample responses and mimic the functionality of the actual API endpoints. However, when you host your application or website in a production environment, the mock API won't work as intended.

The main reason is that mock APIs are not real APIs; they are just simulating the behavior of real APIs. When you host your application, it needs to interact with actual APIs to fetch or send data. Mock APIs are typically used during the development phase to simulate the API responses before the actual API endpoints are implemented or available.

When you deploy your application to a production environment, it is expected to connect to the real APIs and retrieve the live data. If you still have references to mock API endpoints in your production code, those requests will fail or return incorrect data since the mock API doesn't exist or isn't designed to handle production traffic.

To ensure your application works correctly in a production environment, you need to replace the mock API endpoints with the actual API endpoints provided by the services you're integrating with. This way, your application will interact with real APIs and function as intended when hosted.
