import { CronJob } from "cron";

const timeZoneString = process.env.TIMEZONE;

export namespace TaskScheduler {

    /**
     *
     * @param cronTime the cron time string format to specify in what interval to run the task
     * @param functionToExecute the function to be executed in an interval
     * @param contextObject the "this" object within your context
     */
    export function scheduleRepeatingJob(cronTime: string, functionToExecute: () => void, contextObject?: any): CronJob {
        const job = new CronJob(cronTime, functionToExecute, undefined, false, timeZoneString, contextObject);
        job.start();
        return job;
    }
}