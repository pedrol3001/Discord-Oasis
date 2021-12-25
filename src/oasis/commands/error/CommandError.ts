import { TextBasedChannels } from 'discord.js';

class CommandError {
  constructor(public message?: string, public channel?: TextBasedChannels) {}

  async send(): Promise<void> {
    if (this.message === undefined) return;
    await this.channel?.send(this.message || 'An error occurred. Call Support to report it.');
  }
}

export { CommandError };
