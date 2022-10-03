import React from 'react';
import renderer from 'react-test-renderer';

// Note: This is so in debth for future testing of use cases
jest.mock('talkjs', () => {
    return {
        __esModule: true,
        default: {
            ready: Promise.resolve(true),
            User: jest.fn(),
            Session: jest.fn(() => ({
                getOrCreateConversation: jest.fn(() => ({
                    setParticipant: jest.fn(),
                })),
                createChatbox: jest.fn(() => ({
                    select: jest.fn(),
                    mount: jest.fn(),
                })),
            })),
            oneOnOneId: jest.fn(),
        },
    };
});

import Chat from './Chat';

describe('Chat', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Chat />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})