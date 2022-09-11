const axios = require("axios");
const { useState, useEffect } = require("react");

//Using Axios
const useFetch = (url) => {
  const [data, setData] = useState([]); //data will come here
  const [loading, setLoading] = useState(false); //true when making api requst
  const [error, setError] = useState(false); //error

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]); //when url changes this calls

  const fetchAgain = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, fetchAgain };
};

module.exports = useFetch;
