const slides = [
    {
        title: "Putting It All Together",
        subtitle: "Chapter 8: Testing, Security, and Global Deployment",
        content: `An image representing a completed puzzle or an app launching like a rocket 🚀.`
    },
    {
        title: "The Android Application Lifecycle",
        subtitle: "Managing the Big Picture",
        content: `Ensuring Activities, Services, and Broadcasts work together.\n\nField Service Model:\n• App starts → Checks Network → Pulls Data → Updates Room DB → Notifies User.\n• Success: Seamless transitions and consistent data.`
    },
    {
        title: "Performance Auditing & Testing",
        subtitle: "Technical Quality Assurance",
        content: `Tools:\n• Android Profiler (CPU, Memory, Battery)\n• Lint Tool (find bugs)\n• Unit & UI Tests (ensure quality)`
    },
    {
        title: "Security and Obfuscation",
        subtitle: "Protecting User Data",
        content: `• R8 / ProGuard → Shrink + Obfuscate code\n• Keystore → Digitally sign your app\n• Encrypted SharedPreferences → Protect tokens`
    },
    {
        title: "Packaging for the World",
        subtitle: "APK vs AAB",
        content: `Android App Bundle (.aab) is the 2026 standard.\nWhy AAB?\n• Smaller downloads\n• Optimized per device`
    },
    {
        title: "Global Deployment",
        subtitle: "Google Play Console",
        content: `• Manage translations\n• Staged rollouts (10%)\n• Crash & ANR monitoring\n• Store Listing Experiments`
    },
    {
        title: "Future Trends",
        subtitle: "Beyond 2026",
        content: `• Foldable screens\n• Edge AI (on-device ML)\n• 5G/6G → Real-time, zero-latency`
    },
    {
        title: "Conclusion",
        subtitle: "Course Summary",
        content: `From Architecture → Global Deployment.\nMobile development solves human problems.\nThank you!`
    }
];

let index = 0;

function showSlide() {
    const slide = slides[index];
    document.getElementById("slide").innerHTML = `
        <h1>${slide.title}</h1>
        <h3>${slide.subtitle}</h3>
        <p>${slide.content}</p>
    `;
    document.getElementById("counter").innerText = `Slide ${index + 1} of ${slides.length}`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    index = index === 0 ? slides.length - 1 : index - 1;
    showSlide();
}

showSlide();