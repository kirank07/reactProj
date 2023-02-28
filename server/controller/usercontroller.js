import users from '../model/usermodel.js';

export const addUser = async (request,response) => {
    const user = request.body;
    console.log(user);

    const newUser = new users(user);
    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json(error);
    }
}
