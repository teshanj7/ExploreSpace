// Import necessary modules and dependencies
const User = require('../../models/User');
const authController = require('../../controllers/authController');
const bcrypt = require("bcrypt");

// Mock Order.save to return data in authController
// Mock User.findOne
jest.mock('../../models/user', () => ({
    findOne: jest.fn(),
}));

describe('authController', () => {
    // Test cases for registerUser function
    describe('registerUser', () => {

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        it('should not create a new user', async () => {
            const request = {
                body: {
                    "fullName": "Computing - DS",
                    "email": "compds@sliit.lk",
                    "userName": "dsdept",
                    "password": "ds123"
                }

            };

            User.findOne.mockResolvedValue(null); // Mock user not found

            await authController.registerUser(request, response);

            expect(User.findOne).toHaveBeenCalledWith({ email: request.body.email });
            expect(response.status).toHaveBeenCalledWith(500);
            expect(response.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
        });

    });

    // Test cases for loginUser function
    describe('loginUser', () => {
        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        it('should login the user', async () => {
            const request = {
                body: {
                    "email": "heshan@gmail.com",
                    "password": "hs123"
                }
            };

            const mockUser = {
                email: "heshan@gmail.com",
                password: "hs123"
            };

            User.findOne.mockResolvedValue(mockUser); // Mock user found

            // Mock bcrypt compare
            jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

            await authController.loginUser(request, response);

            expect(User.findOne).toHaveBeenCalledWith({ email: request.body.email });
            expect(bcrypt.compare).toHaveBeenCalledWith(request.body.password, mockUser.password);
            expect(response.status).toHaveBeenCalledWith(200);
            expect(response.json).toHaveBeenCalledWith({ token: expect.any(String), user: mockUser, message: 'Successfully logged in!' });
        });

    });
});

