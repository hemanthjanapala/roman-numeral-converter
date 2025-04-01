import React, { useState } from 'react';
import { Provider, defaultTheme, TextField, Button, Text } from '@adobe/react-spectrum';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // To handle API calls
  const convertNumber = async () => {
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`http://localhost:8080/romannumeral?query=${number}`);
      if (!res.ok) {
          // if something went wrong, read text and show
        const errText = await res.text();
        setError(errText);
        return;
      }

      const data = await res.json();
      setResult(data.output);
    } catch (e) {
        // in case backend isn't reachable or any network issue
      setError('Something went wrong');
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <div style={{ padding: '2rem' }}>
        <TextField
          label="Enter a number (1-3999)"
          type="number"
          value={number}
          onChange={setNumber}
        />

        <div style={{ marginTop: '1rem' }}>
          <Button variant="cta" onPress={convertNumber}>
            Convert to Roman
          </Button>
        </div>

        {result && (
          <Text UNSAFE_style={{ marginTop: '1rem', display: 'block', fontSize: '20px' }}>
            Roman Numeral: {result}
          </Text>
        )}

        {error && (
          <Text UNSAFE_style={{ marginTop: '1rem', color: 'red', display: 'block' }}>
            Error: {error}
          </Text>
        )}
      </div>
    </Provider>
  );
}

export default App;
