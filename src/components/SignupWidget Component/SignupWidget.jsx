'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SingupWidget.css';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setMessage('Joining...');
    setTimeout(() => {
      setIsLoading(false);
      setMessage(`Thanks for subscribing, ${email}!`);
    }, simulateNetworkRequestTime);
  };

  return (
    <div className="signup-widget" data-testid="signupWidget">
      <h2 data-testid="signupWidgetTitle">{title}</h2>
      <p data-testid="signupWidgetContent">{content}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          data-testid="signupWidgetInput"
        />
        <button type="submit" disabled={isLoading} data-testid="signupWidgetButton">
          {isLoading ? 'Joining...' : 'Join'}
        </button>
      </form>
      <p data-testid="signupWidgetMessage">{message}</p>
    </div>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
