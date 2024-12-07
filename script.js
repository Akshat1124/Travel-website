document.addEventListener("DOMContentLoaded", function() {
    const budgetSlider = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    // Update the budget display as the slider moves
    budgetSlider.addEventListener("input", function() {
        budgetValue.textContent = `$${budgetSlider.value}`;
    });
});
