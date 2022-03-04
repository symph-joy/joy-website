import { Controller, Get, Param, Query, Response, Request, ServerApplication } from "@symph/server";
import { DocsService } from "../service/docs.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { IComponentLifecycle, RegisterTap } from "@symph/core";
import fastifyCookie from "fastify-cookie";
import { FastifyAdapter } from "@symph/server/dist/platform/fastify";

@Controller("/docs")
export class DocsController implements IComponentLifecycle {
  constructor(private docsService: DocsService, private httpServer: ServerApplication) {}

  @RegisterTap({ hookId: "onBeforeShutdownHook" })
  onBeforeShutdownHook() {}

  initialize(): Promise<void> | void {
    (this.httpServer.getHttpAdapter() as FastifyAdapter).register(fastifyCookie, { secret: "my-secret-001" });
  }

  @Get("menus")
  public getMenus(@Query("path") path: string) {
    return {
      data: this.docsService.getMenus(path),
    };
  }

  @Get("allMenus")
  public getAllMenus(@Response({ passthrough: true }) res: FastifyReply, @Request() req: FastifyRequest) {
    console.log(req.cookies);
    return {
      data: this.docsService.getAllMenus(),
    };
  }

  @Get("/detail/**")
  public getDoc(@Param("*") path: string) {
    return {
      data: this.docsService.getDoc("/" + path),
    };
  }

  @Get("/titleArray")
  public getTitleArray() {
    return {
      data: this.docsService.getTitleArray(),
    };
  }
}
