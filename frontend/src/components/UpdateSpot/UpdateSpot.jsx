import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSpot, getSpot } from '../../store/spotreducer';

function UpdateSpotForm() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spot = useSelector((state) => state.spots.spots.find((spot) => spot.id === Number(spotId)));

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    country: '',
    address: '',
    city: '',
    state: '',
    description: '',
    name: '',
    price: 0,
    previewImage: '',
    images: []
  });

  useEffect(() => {
    if (!spot) {
      dispatch(getSpot(spotId)); 
    } else {
      setFormData({
        country: spot.country,
        address: spot.address,
        city: spot.city,
        state: spot.state,
        description: spot.description,
        name: spot.name,
        price: spot.price,
        previewImage: spot.previewImage,
        images: spot.images || []
      });
    }
  }, [dispatch, spotId, spot]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.description || formData.description.length < 30)
      newErrors.description = "Description must be at least 30 characters";
    if (!formData.name) newErrors.name = "Name is required";
    if (formData.price <= 0) newErrors.price = "Price must be greater than 0";

    if (!formData.previewImage) { newErrors.previewImage = "Preview Image URL is required.";
      } else if (!/\.(jpg|jpeg|png)$/.test(formData.previewImage)) { newErrors.previewImage = "Preview Image URL must end in jpg, jpeg, or png."; }

    formData.images.forEach((imageUrl, i) => {
      if (imageUrl && !imageUrl.match(/^https?:\/\/.*\.(jpeg|jpg|png)$/)) {
        newErrors[`imageUrl${i}`] = "Image URL must end in .png, .jpg, or .jpeg";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      const updatedSpotData = {
        ...formData,
        lat: 50.1234,  
        lng: 120.4567,
        price: parseFloat(formData.price),
        previewImage: formData.previewImage,
      };

      const result = await dispatch(updateSpot(spotId, updatedSpotData));

      if (result.ok) {
        navigate(`/spots/${spotId}`);  
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name.startsWith('imageUrl')) {
      const index = parseInt(e.target.name.slice(8), 10);
      const updatedImages = [...formData.images];
      updatedImages[index] = e.target.value;
      setFormData({ ...formData, images: updatedImages });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  if (!spot) return; 

  return (
    <form onSubmit={handleSubmit} className="create-spot-form" noValidate>
      <h1>Update your Spot</h1>
  
      <div>
        <h2>Where&apos;s your place located?</h2>
        <p>Guests will only get your exact address once they booked a reservation.</p>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        {errors.country && <p className="error">{errors.country}</p>}
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address"
          required
        />
        {errors.address && <p className="error">{errors.address}</p>}
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        {errors.city && <p className="error">{errors.city}</p>}
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
  
      <div>
        <h2>Describe your place to guests</h2>
        <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please write at least 30 characters"
          required
          minLength={30}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
  
      <div>
        <h2>Create a title for your spot</h2>
        <p>Catch guests&apos; attention with a spot title that highlights what makes your place special.</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name of your spot"
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
  
      <div>
        <h2>Set a base price for your spot</h2>
        <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
        <div>
          <span>$ </span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price per night"
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
      </div>
  
      <div>
        <h2>Liven up your spot with photos</h2>
        <p>Submit a link to at least one preview photo to publish your spot.</p>
        <input
          type="text"
          name="previewImage"
          value={formData.previewImage}
          onChange={handleChange}
          placeholder="Preview Image URL"
          required
        />
        {errors.previewImage && <p className="error">{errors.previewImage}</p>}
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <input
              type="text"
              name={`imageUrl${i}`}
              value={formData.images[i] || ''}
              onChange={handleChange}
              placeholder="Image URL"
            />
            {errors[`imageUrl${i}`] && <p className="error">{errors[`imageUrl${i}`]}</p>}
          </div>
        ))}
      </div>
  
      <button type="submit">Update your Spot</button>
    </form>
  );
  
}

export default UpdateSpotForm;
