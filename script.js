document.getElementById('solar-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usage = document.getElementById('usage').value;
    const location = document.getElementById('location').value;
    const panels = document.getElementById('panels').value;

    const result = calculateSolarPanels(usage, location, panels);
    document.getElementById('result').innerText = `You need ${result} solar panels.`;
});

function calculateSolarPanels(usage, location, panels) {
    const efficiency = location * panels;
    return Math.ceil(usage / efficiency);
}
