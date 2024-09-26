import React, { useState } from "react";
import { ProductController } from "@/controllers/productController";
import { ProductObject } from "../objects/ProductObject"

function ProductForm({ step, currentProduct }) {

    const [product, setProduct] = useState(currentProduct);

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
        {(step == 0) && (
       
        <>
            <h2 className="font-poppins font-bold text-3xl pt-1">Generell information</h2>
            <p className="text-sm text-boulder pt-1">* Anger obligatoriskt fällt</p>
            <div>
                <label>Projekt*</label>
                <input
                    type="number"
                    name="projectNumber"
                    value={product.projectNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Produktkategori*</label>
                <input
                    type="number"
                    name="category"
                    value={product.projectNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Produktnamn*</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Produktbilder</label>
                <input
                    type="text"
                    name="picture"
                    value={product.picture}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Eget ID-nummer</label>
                <input
                    type="number"
                    name="articleNumber"
                    value={product.articleNumber}
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
        </>
        )}
        
        {(step == 1) && (
                <>
                <h2 className="font-poppins font-bold text-3xl pt-1">Plats / Status / Antal</h2>
                <div>
                    <label>Antal</label>
                    <input
                       
                    />
                </div>
                <div>
                    <label>Estetiskt skick</label>
                    <input
                        type="text"
                        name="conditionVisual"
                        value={product.conditionVisual}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Funktionellt skick</label>
                    <input
                        type="text"
                        name="conditionFunctional"
                        value={product.conditionFunctional}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Komentarer</label>
                    <input
                       
                    />
                </div>
                <div>
                    <label>Ändra</label>
                    <input
                       
                    />
                </div>

                </>
        )}


        {(step == 2) && (
                <>

                <h2 className="font-poppins font-bold text-3xl pt-1">Form</h2>
                <div>
                    <label>Material</label>
                    <input
                        type="text"
                        name="material"
                        value={product.material}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Färg/Finish</label>
                    <input
                        type="text"
                        name="color"
                        value={product.color}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <h3>Vikt</h3>
                    <p>Enhet - kg</p>
                    <p>Vikt / st</p>
                    <input
                        type="text"
                        name="weight"
                     
                    />
                </div>
                <div>
                    <h3>Mått</h3>
                    <p>Enhet - {product.measurementsUnit}</p>
                </div>
                <div>
                    <div>
                        <label>Bredd</label>
                        <input
                            type="text"
                            name="width"
                            value={product.width}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Längd</label>
                        <input
                            type="text"
                            name="length"
                            value={product.length}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Höjd</label>
                        <input
                            type="text"
                            name="height"
                            value={product.height}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Djup</label>
                        <input
                            type="text"
                            name="depth"
                            value={product.depth}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Diameter</label>
                        <input
                            type="text"
                            name="diameter"
                            value={product.diameter}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Tjocklek</label>
                        <input
                            type="text"
                            name="thickness"
                            value={product.thickness}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <h2 className="font-poppins font-bold text-3xl pt-1">Egenskaper</h2>
                <div>
                    <div>
                        <label>Typ</label>
                        <label>Model</label>
                        <label>Tjocklek</label>
                        <label>Hängning</label>
                        <label>Modulmått</label>
                        <label>Karmdjup mm</label>
                        <label>Brandgastäthet Sa/S200</label>
                        <label>Brandklass</label>
                        <label>Ljusreduktion dB</label>
                    </div>
                </div>

                </>
        )}
        {(step == 3) && (
                <>

                <h2 className="font-poppins font-bold text-3xl pt-1">Produktinformation</h2>
                <div>
                    <label>Produktbeskrivning</label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tillverkare</label>
                    <input
                        type="text"
                        name="manufacturer"
                        value={product.manufacturer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Artikelsnummer</label>
                    <input
                        type="text"
                        name="articleNumber"
                        value={product.articleNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Artikelsnummer</label>
                    <input
                        type="text"
                        name="articleNumber"
                        value={product.articleNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tillverkningsår</label>
                    <input
                        type="text"
                        name="yearOfManufacture"
                        value={product.yearOfManufacture}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Inköpsår</label>
                    <input
                        type="text"
                        name="yearOfPurchase"
                        value={product.yearOfPurchase}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Övrigproduktinformation</label>
                    <div>
                    <label>GTIN:</label>
                    <input
                    type="number"
                    name="GTIN"
                    value={product.GTIN || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>RSK:</label>
                    <input
                    type="number"
                    name="RSK"
                    value={product.RSK || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>ENR:</label>
                    <input
                    type="number"
                    name="ENR"
                    value={product.ENR || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>BSAB:</label>
                    <input
                    type="number"
                    name="BSAB"
                    value={product.BSAB || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>BK04:</label>
                    <input
                    type="number"
                    name="BK04"
                    value={product.BK04 || ''}
                    onChange={handleChange}
                    />
                </div>
                </div>
                </>
        )}
         {(step == 4) && (
                <>

                <h2 className="font-poppins font-bold text-3xl pt-1">Hantering för marknadsplats</h2>
                <h4>Pris</h4>
                <div>
                    <label>Nypris / st</label>
                    <input
                     
                    />
                </div>
                <div>
                    <label>Externtpris / st</label>
                    <input
                     
                    />
                </div>
                <div>
                    <label>Interntptis / st</label>
                    <input
                     
                    />
                </div>
                <div>Lät köparen föreslå pris</div>
                <h4>Leverans</h4>   
                <div>Kan hämtas på plats</div>
                <div>Kan skicka med frakt</div>
        
            </>
        )}
                
             
           
                <button type="submit">Submit</button>
         
        </form>
    );
}

export default ProductForm;
