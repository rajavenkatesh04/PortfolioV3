"use client"

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) return null;

    // Determine the current effective theme
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleToggle = () => {
        // If currently using system theme, switch to the opposite of what system shows
        if (theme === 'system') {
            setTheme(systemTheme === 'dark' ? 'light' : 'dark');
        } else {
            // If manually set, just toggle between light and dark
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        }
    };

    return (
        <StyledWrapper>
            <label className="switch">
                <input
                    id="input"
                    type="checkbox"
                    checked={currentTheme === 'dark'}
                    onChange={handleToggle}
                />
                <div className="slider round">
                    <div className="sun-moon">
                        <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={50} />
                        </svg>
                    </div>
                    <div className="stars">
                        <svg id="star-1" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                        </svg>
                        <svg id="star-2" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                        </svg>
                        <svg id="star-3" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                        </svg>
                        <svg id="star-4" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                        </svg>
                    </div>
                </div>
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 28px;
  }

  .switch #input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196f3;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 0;
    overflow: hidden;
  }

  .sun-moon {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: yellow;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #input:checked + .slider {
    background-color: black;
  }

  #input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  #input:checked + .slider .sun-moon {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    background-color: white;
  }

  .moon-dot {
    opacity: 0;
    transition: 0.4s;
    fill: gray;
  }

  #input:checked + .slider .sun-moon .moon-dot {
    opacity: 1;
  }

  .slider.round {
    border-radius: 28px;
  }

  .slider.round .sun-moon {
    border-radius: 50%;
  }

  #moon-dot-1 {
    left: 8px;
    top: 2px;
    position: absolute;
    width: 5px;
    height: 5px;
    z-index: 4;
  }

  #moon-dot-2 {
    left: 2px;
    top: 8px;
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 4;
  }

  #moon-dot-3 {
    left: 13px;
    top: 15px;
    position: absolute;
    width: 2px;
    height: 2px;
    z-index: 4;
  }

  #light-ray-1 {
    left: -6px;
    top: -6px;
    position: absolute;
    width: 34px;
    height: 34px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-2 {
    left: -50%;
    top: -50%;
    position: absolute;
    width: 44px;
    height: 44px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-3 {
    left: -14px;
    top: -14px;
    position: absolute;
    width: 48px;
    height: 48px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  .cloud-light {
    position: absolute;
    fill: #eee;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }

  .cloud-dark {
    position: absolute;
    fill: #ccc;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }

  #cloud-1 {
    left: 24px;
    top: 12px;
    width: 32px;
  }

  #cloud-2 {
    left: 35px;
    top: 8px;
    width: 16px;
  }

  #cloud-3 {
    left: 14px;
    top: 19px;
    width: 24px;
  }

  #cloud-4 {
    left: 29px;
    top: 14px;
    width: 32px;
  }

  #cloud-5 {
    left: 38px;
    top: 11px;
    width: 16px;
  }

  #cloud-6 {
    left: 18px;
    top: 21px;
    width: 24px;
  }

  @keyframes cloud-move {
    0% {
      transform: translateX(0px);
    }

    40% {
      transform: translateX(3px);
    }

    80% {
      transform: translateX(-3px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  .stars {
    transform: translateY(-26px);
    opacity: 0;
    transition: 0.4s;
  }

  .star {
    fill: white;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    animation-name: star-twinkle;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  #input:checked + .slider .stars {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  #star-1 {
    width: 16px;
    top: 2px;
    left: 2px;
    animation-delay: 0.3s;
  }

  #star-2 {
    width: 5px;
    top: 13px;
    left: 2px;
  }

  #star-3 {
    width: 10px;
    top: 16px;
    left: 8px;
    animation-delay: 0.6s;
  }

  #star-4 {
    width: 14px;
    top: 0px;
    left: 14px;
    animation-delay: 1.3s;
  }

  @keyframes star-twinkle {
    0% {
      transform: scale(1);
    }

    40% {
      transform: scale(1.2);
    }

    80% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export default ThemeToggle;