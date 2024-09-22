import React, { useState } from "react";
import { ProductController } from "@/app/controllers/productController";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        projectId: 1,
        conditionVisual: true,
        conditionFunctional: true,
        picture: '',
        projectNumber: 5,
        description: '',
        material: '',
        'color/finish': '',
        measurementsUnit: 'mm',
        width: null,
        height: null,
        depth: null,
        diameter: null,
        thickness: null,
        manufacturer: '',
        yearOfManufacture: '',
        articleNumber: '',
        yearOfPurchase: '',
        GTIN: '',
        RSK: '',
        ENR: '',
        BSAB: '',
        BK04: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const isNumericField = ['projectId', 'projectNumber', 'width', 'height', 'depth', 'diameter', 'thickness'].includes(name);
        const isBooleanField = ['conditionVisual', 'conditionFunctional'].includes(name);
        
        setProduct({
            ...product, 
            [name]: isNumericField ? (value === '' ? null : parseInt(value, 10)) : 
            isBooleanField ? (value === 'true' ? true : false) : value
        });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault(); //Prevent default from submisson 
        
                // Convert empty date fields to null if not provided
                const productData = {
                    ...product,
                    yearOfManufacture: product.yearOfManufacture || null,
                    yearOfPurchase: product.yearOfPurchase || null,
                };
        
                const response = await ProductController.create(productData);
                
        
        if (response.success) {
            alert('Product created successfully');
        } else {
        console.error('Error creating product:', response.error);
        }
};

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Project id:</label>
                <input
                    type="number"
                    name="projectId"
                    value={product.projectId}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Project number:</label>
                <input
                    type="number"
                    name="projectNumber"
                    value={product.projectNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Width (mm):</label>
                <input
                    type="number"
                    name="width"
                    value={product.width || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Height (mm):</label>
                <input
                    type="number"
                    name="height"
                    value={product.height || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Depth (mm):</label>
                <input
                    type="number"
                    name="depth"
                    value={product.depth || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Diameter (mm):</label>
                <input
                    type="number"
                    name="diameter"
                    value={product.diameter || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Thickness (mm):</label>
                <input
                    type="number"
                    name="thickness"
                    value={product.thickness || ''}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;