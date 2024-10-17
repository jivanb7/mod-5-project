import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { createSpot } from '../../store/spotreducer';
import "./CreateSpot.css";

function CreateSpotForm() {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateForm = async (e) => {
        e.preventDefault(); 
        const newErrors = {};

        const { target } = e;     
        const country = e.target.country?.value;
        const address = target.address?.value;
        const city = target.city?.value;
        const state = target.state?.value;
        const description = target.description?.value;
        const name = target.name?.value;
        const price = target.price?.value;
        const previewImage = target.previewImage?.value;
    
        if (!country) newErrors.country = "Country is required.";
        if (!address) newErrors.address = "Street Address is required.";
        if (!city) newErrors.city = "City is required.";
        if (!state) newErrors.state = "State is required.";
        if (description.length < 30) newErrors.description = "Description must be at least 30 characters.";
        if (!name) newErrors.name = "Title is required.";
        if (!price || price <= 0) newErrors.price = "Price per night is required.";
    
        // Validating preview image
        if (!previewImage) {
            newErrors.previewImage = "Preview Image URL is required.";
        } else if (!/\.(jpg|jpeg|png)$/.test(previewImage)) {
            newErrors.previewImage = "Preview Image URL must end in jpg, jpeg, or png.";
        }
    
        // Validating additional image URLs
        for (let i = 0; i < 5; i++) {
            const imageUrl = target[`imageUrl${i}`]?.value;
            if (imageUrl && !/\.(jpg|jpeg|png)$/.test(imageUrl)) {
                newErrors[`imageUrl${i}`] = "Image URL must end in jpg, jpeg, or png.";
            }
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            const spotData = {
                country: e.target.country.value,
                address: e.target.address.value,
                city: e.target.city.value,
                state: e.target.state.value,
                description: e.target.description.value,
                name: e.target.name.value,
                price: parseInt(e.target.price.value),
                lat: parseFloat(50.1234),
                lng: parseFloat(120.4567),
                previewImage: e.target.previewImage.value,
                images: [...Array(5)].map((_, i) => e.target[`imageUrl${i}`]?.value).filter(Boolean),
            };
            dispatch(createSpot(spotData, navigate));
        }
    };
    

    return (
        <form onSubmit={validateForm} className="create-spot-form" noValidate>
            <h1>Create a New Spot</h1>

            <div>
                <h2>Where&apos;s your place located?</h2>
                <p>Guests will only get your exact address once they booked a reservation.</p>
                <input type="text" name="country" placeholder="Country" required />
                {errors.country && <p className="error">{errors.country}</p>}
                <input type="text" name="address" placeholder="Street Address" required />
                {errors.address && <p className="error">{errors.address}</p>}
                <input type="text" name="city" placeholder="City" required />
                {errors.city && <p className="error">{errors.city}</p>}
                <input type="text" name="state" placeholder="State" required />
                {errors.state && <p className="error">{errors.state}</p>}
            </div>

            <div>
                <h2>Describe your place to guests</h2>
                <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                <input type="text" name="description" placeholder="Please write at least 30 characters" required minLength={30} />
                {errors.description && <p className="error">{errors.description}</p>}
            </div>

            <div>
                <h2>Create a title for your spot</h2>
                <p>Catch guests&apos; attention with a spot title that highlights what makes your place special.</p>
                <input type="text" name="name" placeholder="Name of your spot" required />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <h2>Set a base price for your spot</h2>
                <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                <div>
                    <span>$ </span>
                    <input type="number" name="price" placeholder="Price per night" required />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
            </div>

            <div>
                <h2>Liven up your spot with photos</h2>
                <p>Submit a link to at least one preview photo to publish your spot.</p>
                <input type="text" name="previewImage" placeholder="Preview Image URL" required />
                {errors.previewImage && <p className="error">{errors.previewImage}</p>}
                {[...Array(5)].map((_, i) => (
                    <div key={i}>
                        <input type="text" name={`imageUrl${i}`} placeholder="Image URL" />
                        {errors[`imageUrl${i}`] && <p className="error">{errors[`imageUrl${i}`]}</p>}
                    </div>
                ))}
            </div>

            <button type="submit">Create Spot</button>
        </form>
    );
}

export default CreateSpotForm;
