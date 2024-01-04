import {VercelRequest,VercelResponse} from '@vercel/node';
/**
 * 处理函数，用于处理请求和响应
 * 
 * @param request - 请求对象
 * @param response - 响应对象
 */
export default function handler(
    request: VercelRequest,
    response: VercelResponse,
  ) {
    response.status(200).json({
      body: request.body, // 请求体
      query: request.query, // 查询参数
      cookies: request.cookies, // 部件信息
    });
  }