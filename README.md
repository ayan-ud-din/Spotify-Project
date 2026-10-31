# Spotify Clone – Backend 🎵

This is one of my backend projects built while learning Node.js and Express. I wanted to understand how a music streaming app works behind the scenes, from handling user authentication to uploading music and managing different user roles.

It's inspired by Spotify, but the main focus of this project is learning and practicing backend development.

### What I've built

- User registration, login, and logout
- Password hashing using bcrypt
- JWT-based authentication with cookies
- Separate roles for artists and listeners
- Music uploads using ImageKit
- Album creation and management
- MongoDB models for users, music, and albums
- Protected routes using authentication middleware

### Built With

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Multer
- ImageKit

### Getting Started

Want to run the project locally? Follow these steps.

**1. Clone the repository**

```bash
git clone https://github.com/ayan-ud-din/Spotify-Project.git
cd Spotify-Project
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the project root and add your own credentials:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

**4. Start the server**

```bash
node server.js
```

The server runs on port `3000`.





**Built by [Ayan Uddin](https://github.com/ayan-ud-din)**

