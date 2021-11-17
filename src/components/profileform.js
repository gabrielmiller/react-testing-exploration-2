import React, { useState } from 'react';
import apiService from '../services/api.service';
// import notificationService from '../services/notification.service';
import TestButton from './testButton';

export default function ProfileForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        return apiService.post(firstName, lastName);
        /*.then((response) => {
            notificationService.notify('Did the thing', response);
        });
        */
    }

    return <form data-testid="profile-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        id="first-name"
                        name="first-name"
                        onChange={e => setFirstName(e.target.value)}
                        type="text">
                    </input>
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        id="last-name"
                        name="last-name"
                        onChange={e => setLastName(e.target.value)}
                        type="text">
                    </input>
                </div>
                <div>
                    <TestButton class="button-lg" text="Create User"></TestButton>
                </div>
            </form>
}