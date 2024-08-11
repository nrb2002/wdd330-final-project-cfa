document.addEventListener('DOMContentLoaded', () => {
    // Example function to set up the progress ring
    document.querySelectorAll('.progress-ring').forEach(ring => {
        const progress = ring.dataset.progress;
        const radius = ring.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = offset;
    });
});
