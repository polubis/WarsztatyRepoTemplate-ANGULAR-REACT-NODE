import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

export default class App {
  private createApp() {
    const app: Application = express();

    app.set("port", process.env.PORT || 8080);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(
      cors({
        origin: process.env.origin || "http://localhost:4200",
      })
    );

    // app.use("/api/controllerpath", exampleController);
    // ADD ROUTING HERE

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    // ADD YOUR CUSTOM MIDDLEWARE
    });

    return app;
  }

  private createServer(app: Application) {
    return app.listen(app.get("port"), async () => {
      console.log(
        `Service running at port ${app.get("port")} in ${app.get("env")} mode`
      );
      console.log("Date: ", new Date().toDateString());
    });
  }

  public async start() {
    const app = this.createApp();
    const server = this.createServer(app);

    return Promise.resolve(server);
  }
}
