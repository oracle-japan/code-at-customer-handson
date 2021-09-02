package com.example.handson.edion.frontend;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.ConfigProvider;
import org.eclipse.microprofile.opentracing.Traced;

@Path("/medalist")
@Traced
@RequestScoped
public class MedalistResource {

    // バックエンドサービスのホスト・ポート
    private static final String BACKEND_HOSTNAME = ConfigProvider.getConfig()
            .getOptionalValue("app.service.backend.hostname", String.class).orElse("localhost") + ":"
            + ConfigProvider.getConfig().getOptionalValue("app.service.backend.port", String.class).orElse("8080");

    // バックエンドサービスのパス
    private static final String SERVICE_URL = "/medalist";

    // ロガー
    private static final Logger logger = Logger.getLogger(MedalistResource.class.getName());

    // トレーシング用のヘッダー定義
    private static final String X_REQIEST_ID = "x-request-id";
    private static final String X_B3_TRACEID = "x-b3-traceid";
    private static final String X_B3_SPANID = "x-b3-spanid";
    private static final String X_B3_PARENTSPANID = "x-b3-parentspanid";
    private static final String X_B3_SAMPLED = "x-b3-sampled";
    private static final String X_B3_FLAGS = "x-b3-flags";
    private static final String X_OT_SPAN_CONTEXT = "x-ot-span-context";
    private static final String B3 = "b3";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getMedalist(@Context HttpHeaders headers) {
        logger.log(Level.INFO, "invoke frontend method: {0}",
                Thread.currentThread().getStackTrace()[1].getMethodName());

        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(BACKEND_HOSTNAME).path(SERVICE_URL);

        // バックエンド呼び出し時にIngress-Gatewayからのヘッダー情報を付与（トレーシングのため）
        String result = target.request().header(X_REQIEST_ID, headers.getHeaderString(X_REQIEST_ID))
                .header(X_B3_TRACEID, headers.getHeaderString(X_B3_TRACEID))
                .header(X_B3_SPANID, headers.getHeaderString(X_B3_SPANID))
                .header(X_B3_PARENTSPANID, headers.getHeaderString(X_B3_PARENTSPANID))
                .header(X_B3_SAMPLED, headers.getHeaderString(X_B3_SAMPLED))
                .header(X_B3_FLAGS, headers.getHeaderString(X_B3_FLAGS)).header(B3, headers.getHeaderString(B3))
                .header(X_OT_SPAN_CONTEXT, headers.getHeaderString(X_OT_SPAN_CONTEXT)).get(String.class);

        logger.log(Level.INFO, "frontend method end: {0}", Thread.currentThread().getStackTrace()[1].getMethodName());

        return result;
    }
}
