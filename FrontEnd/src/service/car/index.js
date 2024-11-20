export const getCars = async (id) => {
    const token = localStorage.getItem("token");
    let params;
    if (id) {
        params.id = id;
    }
    let url =
        `${import.meta.env.VITE_API_URL}/cars` +
        new URLSearchParams(params);

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const getDetailCars = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/cars/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const createCars = async (request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("plate", request.plate);
    formData.append("manufacture_id", request.manufacture_id);
    formData.append("model_id", request.model_id);
    formData.append("rentPerDay", request.rentPerDay);
    formData.append("capacity", request.capacity);
    formData.append("description", request.description);
    formData.append("availableAt", request.availableAt);
    formData.append("transmission_id", request.transmission_id);
    formData.append("available", request.available);
    formData.append("type_id", request.type_id);
    formData.append("year", request.year);
    formData.append("options", request.options);
    formData.append("specs", request.specs);
    formData.append("fuel_id", request.fuel_id);
    formData.append("image", request.image);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/cars`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const updateCars = async (id, request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("cars", request.cars);
    formData.append("plate", request.plate);
    formData.append("manufacture_id", request.manufacture_id);
    formData.append("model_id", request.model_id);
    formData.append("rentPerDay", request.rentPerDay);
    formData.append("capacity", request.capacity);
    formData.append("description", request.description);
    formData.append("availableAt", request.availableAt);
    formData.append("transmission_id", request.transmission_id);
    formData.append("available", request.available);
    formData.append("type_id", request.type_id);
    formData.append("year", request.year);
    formData.append("options", request.options);
    formData.append("specs", request.specs);
    formData.append("fuel_id", request.fuel_id);
    formData.append("image", request.newImage);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const deleteCars = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/cars/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    const result = await response.json();
    return result;
};