import { render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import UsesSection from './UsesSection.jsx';
import fs from 'fs';
import path from 'path';
import renderer from 'react-test-renderer';

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: '16” MacBook Pro, M1 Max, 64GB RAM (2022)',
        description:
          'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
      },
      {
        title: 'Dell UltraSharp U2717D',
        description:
          'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
      },
      {
        title: 'Keychron K2',
        description:
          'I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Logitech MX Master 3',
        description:
          'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Audio-Technica ATH-M50x',
        description:
          'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.',
      },
      {
        title: 'Rain Design mStand',
        description:
          'I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'iTerm2 + Oh My Zsh',
        description:
          'I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];

function loadCss(container, filePath) {
  const cssFileContent = fs.readFileSync(path.resolve(filePath), 'utf8');
  const style = document.createElement('style');
  style.innerHTML = cssFileContent;
  container.append(style);
}

function getByClass(className) {
  const { container } = render(<UsesSection items={items} />);

  // -- load css
  loadCss(container, './src/index.css');
  loadCss(container, './src/components/UsesSection/UsesSection.css');

  // Act & Assert
  return container.querySelector(className);
}

afterEach(() => {
  // Restore the original console.error function after all tests
  vi.restoreAllMocks();
});

// 10pts
describe('Check properties', () => {
  test('Default props have correct values', async () => {
    const component = renderer.create(<UsesSection />);
    const testInstance = component.root;
    expect(testInstance.props.items).toStrictEqual([]);
  });
});

// 10pts
describe('Check structure', () => {
  test('UsesSection has correct structure', async () => {
    const section = getByClass('.uses-section');
    const sectionContent = getByClass('.uses-section__content');
    const sectionContentGroup = getByClass('.uses-section__group');
    const sectionContentGroupContent = getByClass('.uses-section__group-content');

    expect(section).toBeTruthy();
    expect(sectionContent).toBeTruthy();
    expect(sectionContentGroup).toBeTruthy();
    expect(sectionContentGroupContent).toBeTruthy();
  });
});

// 20pts
describe('Check behavior', () => {
  test('UsesSection has correct behavior', async () => {
    const section = getByClass('.uses-section');
    const nodes = section.querySelectorAll('.uses-section__group');
    expect(nodes.length).toBe(4);
  });
});

// 10pts
describe('Check style', () => {
  test('section has correct style', () => {
    // Arrange
    const section = getByClass('.uses-section');

    // Act
    const { display, flexDirection, padding } = window.getComputedStyle(section);

    // Assert
    expect(display).toBe('flex');
    expect(flexDirection).toBe('column');
    expect(padding).toBe('32px');
  });

  test('sectionContent has correct style', () => {
    // Arrange
    const sectionContent = getByClass('.uses-section__content');

    // Act
    const { display, flexDirection, rowGap } = window.getComputedStyle(sectionContent);

    // Assert
    expect(display).toBe('flex');
    expect(flexDirection).toBe('column');
    expect(rowGap).toBe('64px');
  });

  test('sectionContentGroup has correct style', () => {
    // Arrange
    const sectionContentGroup = getByClass('.uses-section__group');

    // Act
    const { display, flexDirection, justifyContent, columnGap, paddingLeft, borderLeft } =
      window.getComputedStyle(sectionContentGroup);

    // Assert
    expect(display).toBe('flex');
    expect(flexDirection).toBe('row');
    expect(justifyContent).toBe('start');
    expect(columnGap).toBe('32px');
    expect(paddingLeft).toBe('16px');
    expect(borderLeft).toBe('2px solid #e0e0e0');
  });

  test('sectionContentGroupContent has correct style', () => {
    // Arrange
    const sectionContentGroupContent = getByClass('.uses-section__group-content');

    // Act
    const { display, flexDirection, rowGap } = window.getComputedStyle(sectionContentGroupContent);

    // Assert
    expect(display).toBe('flex');
    expect(flexDirection).toBe('column');
    expect(rowGap).toBe('32px');
  });
});
