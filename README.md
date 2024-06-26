﻿# Insthire

Insthire is a web platform that connects developers with job posters, enabling seamless communication and collaboration. The platform allows users to create and manage profiles, list job opportunities, and connect easily.

Visit the live application: [Insthire](https://insthire.onrender.com/first)

![Insthire Screenshot](./screenshot1.png.png)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Profile Management**: Users can create and manage detailed profiles.
- **Job Listings**: Employers can post job opportunities.
- **Messaging System**: Built-in messaging for easy communication.
- **Secure Authentication**: Secure user authentication using Passport.js.
- **Cloud Storage**: Image uploads and storage using Cloudinary.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/harshjoshi1312/InstHire.git
    cd InstHire
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```bash
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    SESSION_SECRET=your_session_secret
    ```

4. **Configure MongoDB**:
    - For **local setup**, ensure MongoDB is running.
    - For **cloud setup**, use your MongoDB connection string:
      ```bash
      MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/InstHire?retryWrites=true&w=majority
      ```

5. **Start the Application**:
    ```bash
    npm start
    ```

6. **Access the Application**:
    Open your browser and go to:
    ```bash
    http://localhost:3000
    ```

## Usage

1. **Sign Up**: Register a new account.
2. **Profile Setup**: Complete your profile to highlight your skills or job offerings.
3. **Browse and Connect**: Explore profiles or job listings and connect with others.
4. **Messaging**: Use the built-in messaging feature to communicate directly.

## Dependencies

- [cloudinary](https://www.npmjs.com/package/cloudinary) `^1.21.0`
- [connect-flash](https://www.npmjs.com/package/connect-flash) `^0.1.1`
- [connect-mongo](https://www.npmjs.com/package/connect-mongo) `^5.1.0`
- [dotenv](https://www.npmjs.com/package/dotenv) `^16.4.5`
- [ejs](https://www.npmjs.com/package/ejs) `^3.1.10`
- [ejs-mate](https://www.npmjs.com/package/ejs-mate) `^4.0.0`
- [express](https://www.npmjs.com/package/express) `^4.19.2`
- [express-session](https://www.npmjs.com/package/express-session) `^1.18.0`
- [joi](https://www.npmjs.com/package/joi) `^17.13.1`
- [method-override](https://www.npmjs.com/package/method-override) `^3.0.0`
- [mongoose](https://www.npmjs.com/package/mongoose) `^8.3.3`
- [multer](https://www.npmjs.com/package/multer) `^1.4.5-lts.1`
- [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary) `^4.0.0`
- [passport](https://www.npmjs.com/package/passport) `^0.7.0`
- [passport-local](https://www.npmjs.com/package/passport-local) `^1.0.0`
- [passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose) `^8.0.0`

## Contributing

We welcome contributions from the community. Here’s how you can contribute:

1. **Fork the Repository**: Fork the repository on GitHub.
2. **Create a New Branch**: Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make Your Changes**: Commit your changes with a descriptive message:
    ```bash
    git commit -m "Add your feature description"
    ```
4. **Push Your Branch**: Push your branch to GitHub:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a Pull Request**: Create a pull request to merge your changes into the main branch.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions, suggestions, or feedback, please contact:

- **Harsh Joshi**
  - GitHub: [harshjoshi1312](https://github.com/harshjoshi1312)
  - Email: joshiharsh1312@gmail.com

---

**Note**: Make sure to replace `your_cloud_name`, `your_api_key`, `your_api_secret`, and `your_session_secret` with your actual values. The screenshot file should be named `screenshot.png` and placed in the root directory of your project.

For more detailed setup instructions and additional configurations, please refer to the [Cloudinary documentation](https://cloudinary.com/documentation) for setting up your Cloudinary account and API keys.

Happy coding!
