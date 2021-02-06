import { IBroker, TMessage } from './@types/broker';
import { Interpreter } from './interpreter';
import SyntaxHandler from './syntaxHandler';
import { SyntaxValidator } from './syntaxValidator';

export class Broker implements IBroker {
    private _syntaxHandler: SyntaxHandler;
    private _syntaxValidator: SyntaxValidator;
    private _interpreter: Interpreter;

    constructor() {
        this._syntaxHandler = new SyntaxHandler();
        this._syntaxValidator = new SyntaxValidator();
        this._interpreter = new Interpreter();
    }

    processMessage(message: TMessage): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                let acknowledgement: string = '';
                switch (message.target) {
                    case 'syntax':
                        acknowledgement = this._syntaxHandler.processQuery(message.query);
                        break;
                    default:
                        throw Error('Should not be reached.');
                }
                setTimeout(() => resolve(acknowledgement));
            } catch (e) {
                reject(e);
            }
        });
    }
}
