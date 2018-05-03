using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace ReactCore.WEB.CConfig
{

    public interface IAppConfig
    {
        JWT Jwt { get; }
        Test Test { get; }
    }

    public class AppConfig : IAppConfig
    {
        public JWT Jwt { get; set; }
        public Test Test { get; set; }
    }

    public class JWT
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
    }

    public class Test
    {
        public int Value { get; set; }
        public bool IsRemove { get; set; }
        public string Color { get; set; }
    }

    public class ConfigurationOptions : IAppConfig
    {
        private AppConfig Config { get; }

        public ConfigurationOptions(IOptions<AppConfig> options)
        {
            Config = options.Value;
        }

        public JWT Jwt => Config.Jwt;
        public Test Test => Config.Test;
    }
}
