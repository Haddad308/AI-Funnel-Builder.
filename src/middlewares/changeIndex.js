export function changeIndex(items, activeID, overID) {
    // Find the indexes of the items with the provided IDs
    const activeIndex = items.findIndex(item => item.id === activeID);
    const overIndex = items.findIndex(item => item.id === overID);

    // Check if both IDs are found
    if (activeIndex === -1 || overIndex === -1) {
        console.error("One or both of the provided IDs are not found in the list.");
        return items; // Return the original list if any ID is not found
    }

    // Create a new array to avoid mutating the original
    const newItems = [...items];

    // Swap the items in the new array
    const temp = newItems[activeIndex];
    newItems[activeIndex] = newItems[overIndex];
    newItems[overIndex] = temp;

    console.log("Test function", newItems);
    return newItems;
}