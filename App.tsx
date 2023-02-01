import React, { useEffect, useState } from 'react';
import './style.css';
import { Configuration, OpenAIApi } from 'openai';

// Guidance
/**
 *  First of all you need to install openai package (npm i openai)
 *  Then you need a secret key from OPEN AI you can generate from here https://platform.openai.com/account/api-keys
 *  Then you need to confir the key.
 *  Open AI API offical doc link https://platform.openai.com/docs/introduction
 *
 */

export default function App() {
  const [imageGenerated, setImageGenerated] = useState('');
  const configuration = new Configuration({
    // Your Secret Key
    apiKey: 'XX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    const generateImageFromAi = async () => {
      const aiImage: any = await openai.createImage({
        prompt: 'a white siamese cat',
        n: 1,
        size: '512x512',
      });
      console.log('aiImage: ', aiImage);
      setImageGenerated(aiImage?.data?.data[0]?.url);
    };
    generateImageFromAi();
  }, []);

  return (
    <div>
      <h1>Guidance How To Use Open AI</h1>
      <p>First of all you need to install openai package (npm i openai)</p>
      <p>
        Then you need a secret key from OPEN AI you can generate from here
        &nbsp;
        <a href="https://platform.openai.com/account/api-keys">
          Generate API Key
        </a>
      </p>
      <p>Then you need to confir the key.</p>
      <p>
        Open AI API offical doc link &nbsp;
        <a href="https://platform.openai.com/docs/introduction">API DOC</a>
      </p>
      <br />
      <h3>Output</h3>
      <img src={imageGenerated} alt="OpenAI" />
    </div>
  );
}
