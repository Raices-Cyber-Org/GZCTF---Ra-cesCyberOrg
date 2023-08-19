﻿using System.Threading.Channels;
using GZCTF.Repositories;

namespace GZCTF.Services
{
    public class CacheHelper
    {
        private readonly ChannelWriter<CacheRequest> _channelWriter;

        public CacheHelper(ChannelWriter<CacheRequest> channelWriter)
        {
            _channelWriter = channelWriter;
        }

        public async Task FlushScoreboardCache(int gameId, CancellationToken token)
            => await _channelWriter.WriteAsync(ScoreboardCacheHandler.MakeCacheRequest(gameId), token);
    }
}

namespace GZCTF.Utils
{
    /// <summary>
    /// 缓存标识
    /// </summary>
    public static class CacheKey
    {
        /// <summary>
        /// 缓存更新锁
        /// </summary>
        public static string UpdateLock(string key) => $"_CacheUpdateLock_{key}";

        /// <summary>
        /// 积分榜缓存
        /// </summary>
        public static string ScoreBoard(int id) => $"_ScoreBoard_{id}";

        /// <summary>
        /// 积分榜缓存
        /// </summary>
        public static string ScoreBoard(string id) => $"_ScoreBoard_{id}";

        /// <summary>
        /// 积分榜缓存根标识
        /// </summary>
        public const string ScoreBoardBase = "_ScoreBoard";

        /// <summary>
        /// 比赛通知缓存
        /// </summary>
        public static string GameNotice(int id) => $"_GameNotice_{id}";

        /// <summary>
        /// 比赛通知缓存
        /// </summary>
        public static string GameNotice(string id) => $"_ScoreBoard_{id}";

        /// <summary>
        /// 比赛基础信息缓存
        /// </summary>
        public const string BasicGameInfo = "_BasicGameInfo";

        /// <summary>
        /// 文章
        /// </summary>
        public const string Posts = "_Posts";

        /// <summary>
        /// 容器连接数缓存
        /// </summary>
        public static string ConnectionCount(string id) => $"_Container_Conn_{id}";
    }
}
