import {render, fireEvent, screen} from '@testing-library/react';
import apiService, { mockPost } from '../services/api.service';
import ProfileForm from './profileform';

jest.mock('../services/api.service');

/*
beforeEach(() => {
    apiService.mockClear();
    mockPost.mockClear();
});
*/

// const apiService = jest.createMockFromModule('../services/api.service').default;

test('it is a contrived assertion', () => {
    expect(true).toBe(true);
});

test('contains child elements', async () => {
    render(<ProfileForm></ProfileForm>);

    const form = await screen.findByTestId('profile-form');

    // the <form> element has three child nodes
    expect(form).toHaveLength(3);
});

test('contains a create user button', async () => {
    render(<ProfileForm></ProfileForm>);

    const CreateUserButtons = await screen.findAllByRole('button', {name: 'Create User'});

    expect(CreateUserButtons).toHaveLength(1);
});

test('contains first and last name inputs(by role)', async () => {
    render(<ProfileForm></ProfileForm>);

    const TextInputs = await screen.findAllByRole('textbox');

    expect(TextInputs).toHaveLength(2);
});

test('contains first and last name inputs(by label)', async () => {
    render(<ProfileForm></ProfileForm>);

    const FirstNameInputs = await screen.findAllByLabelText('First Name');
    const LastNameInputs = await screen.findAllByLabelText('First Name');

    expect(FirstNameInputs).toHaveLength(1);
    expect(LastNameInputs).toHaveLength(1);
});

test('form submission calls the api', () => {
    // apiService.post.mockResolvedValue({ data: 'hello' });
    render(<ProfileForm></ProfileForm>);

    fireEvent(
        screen.getByRole('button', {name: 'Create User'}),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    );
    expect(1).toEqual(1);
    expect(mockPost).toHaveBeenCalledWith('first', 'last');
});

/*

*/