(function () {
  const startTime = Date.now();
  const siteId = "dacafb"; // Your live site ID

  window.addEventListener("beforeunload", () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const payload = {
      siteId,
      pages: [window.location.pathname],
      url: window.location.href,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      timeSpent,
    };

    console.log("📤 Sending final tracker payload:", payload);

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((res) => console.log("✅ Tracker payload sent:", res.status))
      .catch((err) => console.error("❌ Tracker error:", err));
  });
})();