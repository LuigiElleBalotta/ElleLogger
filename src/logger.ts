import * as moment from 'moment';

export interface ElleLoggerOptions {
    context?: string
    date?: ElleLoggerDateOptions
    logConfiguration?: ElleLoggerLogConfigurations
}

export interface ElleLoggerDateOptions {
    useDate: boolean
    dateFormat?: string
}

export interface ElleLoggerLogConfigurations {

    error?: ElleLoggerLogConfiguration
    info?: ElleLoggerLogConfiguration
    debug?: ElleLoggerLogConfiguration
    success?: ElleLoggerLogConfiguration
    warn?: ElleLoggerLogConfiguration

}

export interface ElleLoggerLogConfiguration {
    background?: string
    color?: string
}

export class ElleLogger {

    private _context: string;

    // Date options
    private _useDate: boolean;
    private _dateFormat: string;

    private _logConfig: ElleLoggerLogConfigurations

    constructor(options?: ElleLoggerOptions) {
        this._context = options?.context ?? '';

        this._useDate = options?.date?.useDate ?? false;

        if( !this._useDate ) {
            this._dateFormat = options?.date?.dateFormat ?? '';
        }
        else {
            this._dateFormat = options?.date?.dateFormat ?? 'YYYY-MM-DD HH:mm:ss';
        }

        this._logConfig = {
            debug: {
                background: options?.logConfiguration?.debug?.background ?? '#e83086',
                color: options?.logConfiguration?.debug?.color ?? '#000',
            },
            info: {
                background: options?.logConfiguration?.info?.background ?? '#27e6f7',
                color: options?.logConfiguration?.info?.color ?? '#000',
            },
            error: {
                background: options?.logConfiguration?.error?.background ?? '#e02626',
                color: options?.logConfiguration?.error?.color ?? '#000',
            },
            success: {
                background: options?.logConfiguration?.success?.background ?? '#1af230',
                color: options?.logConfiguration?.success?.color ?? '#000',
            },
            warn: {
                background: options?.logConfiguration?.warn?.background ?? '#ffac1e',
                color: options?.logConfiguration?.warn?.color ?? '#000',
            }
        }

    }

    private _formatMessage( message: string ): string {

        let ret = '';

        let useContext = this._context && !this._isNullOrWhitespace(this._context)

        if( useContext ) {
            ret += `[${this._context}]`;
        }

        if( this._useDate ) {

            if( useContext ) {
                ret += ` - ${ moment().format(this._dateFormat) } ➡️`;
            }
            else {
                ret += `[${ moment().format(this._dateFormat) }] ➡️`
            }

        }

        return `${ret} ${message}`;

    }

    private _isNullOrWhitespace(str: string): boolean {
        return str === null || str === '' || str === undefined || !str;
    }

    info( message: string, ...args ) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.info.background}; color: ${this._logConfig.info.color}`, args);
    }

    debug( message: string, ...args ) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.debug.background}; color: ${this._logConfig.debug.color}`, args);
    }

    error( message: string, ...args ) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.error.background}; color: ${this._logConfig.error.color}`, args);
    }

    success( message: string, ...args ) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.success.background}; color: ${this._logConfig.success.color}`, args);
    }

    warn( message: string, ...args ) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.warn.background}; color: ${this._logConfig.warn.color}`, args);
    }

}
