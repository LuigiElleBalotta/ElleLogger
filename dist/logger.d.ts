export interface ElleLoggerOptions {
    context?: string;
    date?: ElleLoggerDateOptions;
    logConfiguration?: ElleLoggerLogConfigurations;
}
export interface ElleLoggerDateOptions {
    useDate: boolean;
    dateFormat?: string;
}
export interface ElleLoggerLogConfigurations {
    error?: ElleLoggerLogConfiguration;
    info?: ElleLoggerLogConfiguration;
    debug?: ElleLoggerLogConfiguration;
    success?: ElleLoggerLogConfiguration;
    warn?: ElleLoggerLogConfiguration;
}
export interface ElleLoggerLogConfiguration {
    background?: string;
    color?: string;
}
export declare class ElleLogger {
    private _context;
    private _useDate;
    private _dateFormat;
    private _logConfig;
    constructor(options?: ElleLoggerOptions);
    private _formatMessage;
    private _isNullOrWhitespace;
    info(message: string, ...args: any[]): void;
    debug(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
    success(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
}
