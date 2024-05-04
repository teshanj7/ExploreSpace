// Import necessary modules and dependencies
const User = require('../../models/User');
const authController = require('../../controllers/authController');

// Mock Order.save to return data in roomController
jest.mock('../../models/User');

// Test cases for createRoom function
describe('authController', () => {
    describe('registerUser', () => {

        const response = {
            json: jest.fn((x) => x)
        };

        it('should not create a new user', async () => {
            const request = {
                body: {
                    "fullName": "Computing - DS",
                    "email": "compds@sliit.lk",
                    "userName": 453,
                    "password": "ds123"
                }
            };

            const mockSave = jest.fn().mockResolvedValue({});
            User.mockImplementationOnce(() => ({
                save: mockSave,
            }));

            await authController.registerUser(request, response);

            expect(mockSave).toHaveBeenCalled();
            expect(response.json).toHaveBeenCalledWith("User sign up successful!");
        });

        it('should not create a new user if email is not provided', async () => {
            const request = {
                body: {
                    "fullName": "Computing - DS",
                    "email": "",
                    "userName": "dsdept",
                    "password": "ds123"
                }
            };

            const mockSave = jest.fn().mockResolvedValue({});
            User.mockImplementationOnce(() => ({
                save: mockSave,
            }));

            await authController.registerUser(request, response);

            // Assert that the save function is not called
            expect(mockSave).not.toHaveBeenCalled();
            // Assert that the response does not contain the expected message
            expect(response.json).not.toHaveBeenCalledWith("User sign up successful!");
        });
    });
});
