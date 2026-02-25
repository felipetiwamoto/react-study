import { useState } from "react";
import { useCategoriesStore } from "../stores/categories.store";

export function ZustandCategoriesStorePage() {
    const { categories, add, update, remove } = useCategoriesStore();
    const [categoryName, setCategoryName] = useState("");

    return (
        <div>
            <h1>Categories Store</h1>
            <ul>
                {categories.map((c) => (
                    <li key={c.id}>
                        {c.name}
                        <button onClick={() => update(c.id, c.name.toUpperCase())}>
                            Uppercase
                        </button>
                        <button onClick={() => remove(c.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Add category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
            <button onClick={() => add(categoryName)}>Add</button>
        </div>
    );
}
