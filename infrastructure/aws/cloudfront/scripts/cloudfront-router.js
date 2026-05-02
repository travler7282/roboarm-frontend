function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // 1. If it's a request for a physical file (contains a dot), let it pass through
    if (uri.includes('.')) {
        return request;
    }

    // 2. Logic for RoboArm SPA routing
    if (uri.startsWith('/apps/roboarm')) {
        request.uri = '/apps/roboarm/index.html';
    } else {
        // 3. Fallback to the same app entrypoint for deep links
        request.uri = '/index.html';
    }

    console.log("Redirected to: " + request.uri);
    return request;
}