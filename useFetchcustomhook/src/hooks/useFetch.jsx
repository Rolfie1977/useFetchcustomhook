// useFetch.js
import { useState, useEffect } from "react";

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true); // Indicate loading state
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const json = await response.json();
				setData(json); // Set the fetched data
			} catch (err) {
				setError(err.message); // Handle errors
			} finally {
				setLoading(false); // Stop loading
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
}
