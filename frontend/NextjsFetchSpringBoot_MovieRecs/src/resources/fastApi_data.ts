//Fetching data w/ Server Components

//----------- FastAPI REST Endpoints ----- //

export async function getRatingsAnalysis() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/ratings`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Stats from FastAPI individual/ratings: " + error);
    }
}

export async function getRatingsChartData() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/trends`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getGenresAnalysis() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/genres`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getYearsAnalysis() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/years`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getDirectorsAnalysis() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/directors`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getActorsAnalysis() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/individual/actors`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getCorrelation() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/category/correlation`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getStatistics() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/category/statistics`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getDistributionsRating() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/category/distributions/rating`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}

export async function getDistributionsRuntime() {
    try {
        const data = await fetch(`http://${process.env.FAST_API_DOMAIN}/analysis/category/distributions/runtime`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Ratings Chart Data from FastAPI individual/trends: " + error);
    }
}