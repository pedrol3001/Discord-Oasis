import { Message } from 'discord.js';
import { CommandError } from '../../../commands/error/CommandError';
import { IMicroHandler } from '../IMicroHandler';

class PermissionsMicroHandler implements IMicroHandler {
  async handle(msg: Message): Promise<void> {
    // permissions handler
    if (!msg.guild || !msg.command?.permissions) return;
    for (const requiredPermission of msg.command.permissions) {
      if (!msg.member?.permissions.has(requiredPermission)) {
        const reply = `This command requires the permissions ${msg.command.permissions.join(', ')}`;
        throw new CommandError(reply, msg.channel);
      }
    }
  }
}

export { PermissionsMicroHandler };
