import React from 'react';
import Talk from 'talkjs';

const chatBoxStyle = {
    height: '500px',
};

export default class Chat extends React.Component {
    session: Talk.Session | null = null;
    chatboxEl: any = React.createRef();

    async componentDidMount() {
        await Talk.ready;

        const currentUser = new Talk.User({
            id: '1',
            name: 'Henry Mill',
            email: 'henrymill@example.com',
            photoUrl: 'henry.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
        });
        const otherUser = new Talk.User({
            id: '2',
            name: 'Jessica Wells',
            email: 'jessicawells@example.com',
            photoUrl: 'jessica.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
        });

        this.session = new Talk.Session({
            appId: 'tXAzIgN4', // TODO: Replace with env var
            me: currentUser,
        });

        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = this.session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        const chatbox = this.session.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(this.chatboxEl.current);
    }

    render() {
        return <div style={chatBoxStyle} ref={this.chatboxEl} />;
    }

    componentWillUnmount() {
        if (this.session) this.session.destroy();
    }
}
