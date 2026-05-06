const jobs = [
    {
        title: "Software Developer",
        company: "Shopify",
        location: "Ottawa, Canada"
    },
    {
        title: "Warehouse Worker",
        company: "Amazon",
        location: "Toronto, Canada"
    },
    {
        title: "Nurse",
        company: "Health Canada",
        location: "Vancouver, Canada"
    }
];

function displayJobs(list) {
    const jobsDiv = document.getElementById("jobs");
    jobsDiv.innerHTML = "";

    list.forEach(job => {
        jobsDiv.innerHTML += `
            <div class="job">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
            </div>
        `;
    });
}

displayJobs(jobs);

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value)
    );

    displayJobs(filtered);
});
